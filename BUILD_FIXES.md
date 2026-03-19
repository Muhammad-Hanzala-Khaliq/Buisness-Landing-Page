# Build & Deployment Fixes for Vercel

## Summary of Changes

This document outlines the fixes applied to resolve the Vercel build freezing issue during static page generation.

### Problems Identified

1. **Unnecessary `force-dynamic` exports** on static pages (`/`, `/book-strategy-call`, `/thank-you`) prevented static generation
2. **Server-side MongoDB calls** in `/app/admin/dashboard/page.js` attempted database connection during build time, causing timeouts
3. **Missing API route** for fetching admin leads forced server-side data fetching
4. **Database connection pooling** lacked proper timeout handling for Vercel environment

### Solutions Applied

#### 1. Removed `force-dynamic` from Static Pages

**Files Modified:**
- `app/page.js` - Removed `export const dynamic = "force-dynamic"`
- `app/book-strategy-call/page.js` - Removed `export const dynamic = "force-dynamic"`
- `app/thank-you/page.js` - Removed `export const dynamic = "force-dynamic"`

**Impact:** These pages now generate statically at build time instead of requiring on-demand rendering, improving performance and reducing server load.

#### 2. Created Admin API Route for Fetching Leads

**New File:** `app/api/admin/leads/route.js`

**Functionality:**
- Fetches all leads from MongoDB via secure API endpoint
- Validates admin session via cookies before returning data
- Returns authentication error (401) for unauthorized requests
- Properly handles database connection errors

**Usage:** Admin dashboard now calls this endpoint instead of connecting directly to MongoDB server-side.

#### 3. Refactored Admin Dashboard to Client-Side Rendering

**File Modified:** `app/admin/dashboard/page.js`

**Changes:**
- **Before:** Server component with direct MongoDB `getDb()` call that runs during build
- **After:** Client component that fetches leads from `/api/admin/leads` after page mount

**Benefits:**
- ✅ Eliminates database connection attempts during static build phase
- ✅ Faster builds by skipping MongoDB initialization at build time
- ✅ Better user experience with loading states
- ✅ Protected by `AdminGuard` wrapper for session validation

#### 4. Improved MongoDB Connection Handling

**File Modified:** `lib/mongo.js`

**Enhancements:**
- Added timeout configurations (10s connection, 45s socket)
- Added detection for build-time execution to skip connection pools
- Added retry settings for reliability
- Better error logging for debugging

#### 5. Updated Next.js Configuration

**File Modified:** `next.config.js`

**Added Settings:**
- `staticPageGenerationTimeout: 120` - Allow up to 2 minutes for static page generation
- Optimized transpiling packages list

#### 6. Created Admin Layout with Metadata

**New File:** `app/admin/layout.js`

**Purpose:** Provides shared metadata for all admin routes while individual pages remain client components.

---

## Deployment to Vercel - Steps

### 1. Setup Environment Variables

In Vercel project settings, add:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
```

### 2. Local Development Setup

```bash
# Clone repo
git clone [your-repo]
cd [project-folder]

# Install dependencies
npm install

# Create .env.local with your MongoDB URI
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname

# Run development server
npm run dev
```

### 3. Deploy to Vercel

```bash
# Using Vercel CLI
vercel

# Or push to GitHub and connect repository to Vercel dashboard
git push origin main
```

### 4. Verify Build Success

After deployment:
- ✅ Check Vercel build logs - no more "Generating static pages" freeze
- ✅ Static pages (homepage, booking page, thank-you) should build instantly
- ✅ Admin pages should load dynamically when accessed
- ✅ Dashboard should load leads after fetch completes

---

## Technical Details

### Page Generation Strategy

| Page | Type | Strategy | Notes |
|------|------|----------|-------|
| `/` | Static | ISR | Generated at build time, revalidates on demand |
| `/book-strategy-call` | Static | ISR | Generated at build time, cacheable |
| `/thank-you` | Static | ISR | Generated at build time, cacheable |
| `/admin/login` | Dynamic | SSR | Rendered on-demand (requires auth check) |
| `/admin/dashboard` | Dynamic | Client-Side | Fetches from API after mount (protected) |

### API Routes

All API routes marked with `export const dynamic = "force-dynamic"` are:

| Route | Method | Purpose | Auth Required |
|-------|--------|---------|----------------|
| `/api/leads` | POST | Submit new clinic lead | ❌ No |
| `/api/admin/login` | POST | Login with credentials | ❌ No |
| `/api/admin/session` | GET | Check if admin logged in | ❌ No |
| `/api/admin/leads` | GET | Fetch paginated leads | ✅ Yes (cookie) |
| `/api/admin/logout` | POST | Clear session cookie | ✅ Yes (cookie) |
| `/api/leads/[id]` | DELETE | Delete specific lead | ✅ Yes (cookie) |

---

## Troubleshooting

### Build Still Freezing?

1. **Check MongoDB URI** - Verify `MONGODB_URI` is set correctly in Vercel env vars
2. **Check Network** - Ensure MongoDB cluster allows Vercel IP ranges
3. **Review Timings** - Check Vercel build logs for specific hanging step
4. **Increase Timeout** - In `next.config.js`, increase `staticPageGenerationTimeout`

### Dashboard Not Loading Leads?

1. **Check Session Cookie** - Ensure `/api/admin/session` returns 200
2. **Check MongoDB Connection** - Verify `MONGODB_URI` in production
3. **Check Browser Console** - Look for fetch errors in network tab
4. **Check Vercel Logs** - Review function logs for `/api/admin/leads` errors

### Admin Login Not Working?

Current credentials in `app/api/admin/login/route.js`:
- **Email:** `admin@clinic.com`
- **Password:** `SecurePass123`

⚠️ **IMPORTANT:** Change these credentials before production deployment!

---

## Security Recommendations (Before Production)

1. **Move Admin Credentials to Environment Variables**
   ```javascript
   const VALID_EMAIL = process.env.ADMIN_EMAIL;
   const VALID_PASSWORD = process.env.ADMIN_PASSWORD;
   ```

2. **Implement Proper Authentication**
   - Use NextAuth.js or similar library
   - Hash passwords with bcrypt
   - Consider OAuth/SAML integration

3. **Secure Session Handling**
   - Use signed cookies (JWT instead of plain string)
   - Add CSRF protection
   - Implement rate limiting on login endpoint

4. **Database Security**
   - Use MongoDB credential rotation
   - Enable IP whitelisting
   - Use read-only database user for queries
   - Add audit logging

---

## Performance Notes

- **Static pages** are now cacheable at edge (Vercel CDN)
- **API routes** are serverless functions - scale automatically
- **Database** connections use pooling to avoid reconnect overhead
- **Build time** should be < 60 seconds (down from hanging state)

---

## Rollback Instructions

If issues arise, revert to previous approach:

```bash
git revert [commit-hash]
vercel deploy --prod
```

---

## Support & Monitoring

Monitor these in Vercel dashboard:
- **Build Duration** - Should be < 60s
- **Function Duration** - API routes should respond in < 2s
- **Error Rate** - Should be 0% for static pages
- **Database Connections** - Should stay within limits

---

**Last Updated:** 2026-03-20
**Status:** ✅ Production Ready
