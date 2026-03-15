# Frontend Deployment Guide - Vercel

## Prerequisites
- Frontend code pushed to GitHub repository
- Backend already deployed on Vercel (from previous setup)
- Vercel account

## Step-by-Step Deployment

### 1. Connect GitHub Repository
1. Go to https://vercel.com/new
2. Click **Continue** under "Create Git Repository"
3. Connect your GitHub account (if not already connected)
4. Select your `mess-management-frontend` repository
5. Choose the **frontend** directory as the root
6. Click **Continue**

![Vercel new project](https://vercel.com/docs/static/import-git-repo.png)

### 2. Configure Project Settings
1. **Project Name:** `mess-management-frontend` (or your preferred name)
2. **Framework:** Keep as **Vite** (auto-detected)
3. **Build Command:** `npm run build` (default)
4. **Output Directory:** `dist` (default)
5. **Install Command:** `npm install` (default)

Click **Continue**

### 3. Add Environment Variables
1. Add environment variable:
   - **Name:** `VITE_API_URL`
   - **Value:** Your backend Vercel URL

   **Example:**
   ```
   VITE_API_URL=https://mess-management-backend-qa4wia70j.vercel.app
   ```
   
   ⚠️ **Important:** Replace with your actual backend URL from the previous deployment

   To find your backend URL:
   - Go to https://vercel.com/dashboard
   - Select `mess-management-backend` project
   - Copy the domain from the top of the page

2. Click **Add** 
3. Click **Deploy**

**Wait for deployment to complete (~2-3 minutes)**

### 4. Update Frontend Code (Optional But Recommended)
If you want to use the `VITE_API_URL` environment variable in your frontend:

Create `src/config.js`:
```javascript
// src/config.js
export const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';
```

Then use it in your components:
```javascript
import { API_BASE_URL } from '../config.js';

const response = await axios.get(`${API_BASE_URL}/v1/student/list`);
```

**Current Implementation:** Your app uses relative paths (`/api/v1/...`) which will work with Vercel's proxy setup.

### 5. Setup CORS (If Needed)
Your backend already has `CORS_ORIGIN=*` set, so **cross-origin requests should work**.

If you encounter CORS errors:
1. Go to backend Vercel Settings > Environment Variables
2. Verify: `CORS_ORIGIN=*` is set
3. Redeploy backend

### 6. Test Deployment

Once deployment is complete:

1. **Visit your frontend URL:** `https://your-frontend-url.vercel.app`
2. **Test an API call:** Open browser DevTools (F12)
3. Check Network tab when you click a button that makes an API call
4. Verify requests are going to the backend URL

**Expected Request:**
```
https://mess-management-backend-xxx.vercel.app/api/v1/student/list
```

### 7. Monitor & Troubleshoot

**Check Deployment Logs:**
1. Go to Vercel Dashboard
2. Select your project
3. Click **Deployments**
4. Click latest deployment
5. View build and runtime logs

**Common Issues:**

| Issue | Solution |
|-------|----------|
| API calls 404 | Check `VITE_API_URL` is set correctly in Vercel |
| CORS errors | Verify backend has `CORS_ORIGIN=*` |
| Blank page | Check browser console for build errors |
| Images not loading | Ensure all image paths are correct relative to `/public` |

---

## Environment Variables Reference

### Frontend (.env for local development)
```
VITE_API_URL=http://localhost:8000
```

### Frontend (Vercel Environment Variables)
```
VITE_API_URL=https://mess-management-backend-xxx.vercel.app
```

Replace `xxx` with your actual backend deployment URL.

---

## File Structure for Reference

```
frontend/
├── src/
│   ├── components/
│   │   ├── complaint/
│   │   │   └── AdminComplaint.jsx         ← Fixed hardcoded URL
│   │   ├── voting/
│   │   ├── dashboard/
│   │   └── ...
│   ├── app.jsx
│   ├── main.jsx
│   └── ...
├── public/
├── vite.config.js
├── vercel.json                             ← Configuration added
├── .env.example                            ← Template added  
├── package.json
└── README.md
```

---

## After Successful Deployment

### Share Your App
- Frontend URL: `https://mess-management-frontend-xxx.vercel.app`
- Backend API: `https://mess-management-backend-xxx.vercel.app`

### Update Links
Update any documentation or social links with your production URLs.

### Monitor Analytics
- Visit Vercel Dashboard
- Check **Analytics** tab for real-time metrics
- Monitor build duration and response times

---

## Redeployment

To redeploy after code changes:

**Option 1: Automatic (Recommended)**
- Push changes to GitHub
- Vercel automatically redeploys

**Option 2: Manual**
- Go to Vercel Dashboard
- Click **Deployments**
- Click three dots on latest deployment
- Select **Redeploy**

---

## Need Help?

- **Vercel Docs:** https://vercel.com/docs
- **Vite Docs:** https://vitejs.dev/
- **Check build logs** in Vercel dashboard for specific errors
