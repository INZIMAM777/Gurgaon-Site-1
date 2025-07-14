# Deploy to Render (Free Tier)

This guide will help you deploy your full-stack application to Render's free tier.

## Prerequisites

1. A GitHub account
2. Your code pushed to a GitHub repository
3. A Render account (sign up at [render.com](https://render.com))

## Step-by-Step Deployment

### 1. Prepare Your Repository

Make sure your code is pushed to GitHub with the following files:
- `render.yaml` (already created)
- `package.json` (already exists)
- `server/routes.ts` (updated with health check)

### 2. Deploy to Render

#### Option A: Using Blueprint (Recommended)

1. Go to [render.com](https://render.com) and sign in
2. Click "New +" and select "Blueprint"
3. Connect your GitHub repository
4. Render will automatically detect the `render.yaml` file
5. Click "Apply" to deploy both the web service and database

#### Option B: Manual Deployment

1. **Deploy the Database:**
   - Go to [render.com](https://render.com) and sign in
   - Click "New +" and select "PostgreSQL"
   - Choose "Free" plan
   - Name it `rest-express-db`
   - Click "Create Database"
   - Copy the connection string

2. **Deploy the Web Service:**
   - Click "New +" and select "Web Service"
   - Connect your GitHub repository
   - Configure the service:
     - **Name**: `rest-express-app`
     - **Environment**: `Node`
     - **Build Command**: `npm install && npm run build`
     - **Start Command**: `npm start`
     - **Plan**: Free

3. **Add Environment Variables:**
   - Go to your web service settings
   - Add the following environment variables:
     - `NODE_ENV`: `production`
     - `DATABASE_URL`: (paste the connection string from step 1)
     - `SESSION_SECRET`: (generate a random string)

### 3. Database Setup

After deployment, you'll need to run database migrations:

1. Go to your web service in Render
2. Click on "Shell" tab
3. Run the migration command:
   ```bash
   npm run db:push
   ```

### 4. Verify Deployment

1. Your app will be available at: `https://your-app-name.onrender.com`
2. Test the health endpoint: `https://your-app-name.onrender.com/api/health`
3. Test your API endpoints: `https://your-app-name.onrender.com/api/properties`

## Free Tier Limitations

- **Web Services**: 750 hours/month (about 31 days)
- **Databases**: 90 days free trial, then $7/month
- **Build Time**: 500 minutes/month
- **Bandwidth**: 100GB/month

## Troubleshooting

### Common Issues

1. **Build Fails**: Check the build logs in Render dashboard
2. **Database Connection**: Verify `DATABASE_URL` environment variable
3. **Health Check Fails**: Ensure `/api/health` endpoint returns 200
4. **App Crashes**: Check the logs for runtime errors

### Useful Commands

```bash
# Check build logs
# (View in Render dashboard)

# Check runtime logs
# (View in Render dashboard)

# Test locally before deploying
npm run build
npm start
```

## Environment Variables Reference

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | PostgreSQL connection string | Yes |
| `SESSION_SECRET` | Secret for session encryption | Yes |
| `NODE_ENV` | Environment (production/development) | Yes |

## Support

- [Render Documentation](https://render.com/docs)
- [Render Community](https://community.render.com)
- [Free Tier FAQ](https://render.com/docs/free)