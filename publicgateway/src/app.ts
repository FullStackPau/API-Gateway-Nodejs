import express, { Request, Response, NextFunction} from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
const app = express();

app.use("/inventory", createProxyMiddleware({
    target:`http://inventoryservice:8100`,
    changeOrigin: true,
    headers: {
        Accept: `application/json`
    }
}));
app.use("/client", createProxyMiddleware({
    target:`http://clientservice:8000`,
    changeOrigin: true,
    headers: {
        Accept: `application/json`
    }
}));
export default app;