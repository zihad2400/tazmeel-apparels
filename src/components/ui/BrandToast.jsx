"use client";
import { Toaster } from "react-hot-toast";

export default function BrandToast() {
  return (
    <Toaster
      position="top-right"
      reverseOrder={false}
      gutter={12}
      containerClassName="toast-container"
      toastOptions={{
        // ⭐ Default styling
        className: "brand-toast",
        duration: 5000,

        // ⭐ Base styles
        style: {
          background: "linear-gradient(135deg, #0F3D2E 0%, #1B5E45 100%)",
          color: "#F5F1E8",
          padding: "16px 20px",
          borderRadius: "16px",
          fontSize: "15px",
          fontWeight: "500",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          boxShadow:
            "0 20px 40px -10px rgba(15, 61, 46, 0.5), 0 0 0 1px rgba(201, 162, 39, 0.2)",
          border: "1px solid rgba(201, 162, 39, 0.3)",
          maxWidth: "420px",
          minWidth: "320px",
          letterSpacing: "0.2px",
          lineHeight: "1.5",
        },

        // ⭐ Success toast
        success: {
          duration: 5000,
          icon: "✅",
          style: {
            background:
              "linear-gradient(135deg, #0F3D2E 0%, #1B5E45 100%)",
            color: "#F5F1E8",
            border: "1px solid rgba(34, 197, 94, 0.4)",
            boxShadow:
              "0 20px 40px -10px rgba(34, 197, 94, 0.3), 0 0 0 1px rgba(201, 162, 39, 0.2)",
          },
        },

        // ⭐ Error toast
        error: {
          duration: 6000,
          icon: "❌",
          style: {
            background:
              "linear-gradient(135deg, #7f1d1d 0%, #991b1b 100%)",
            color: "#FEF2F2",
            border: "1px solid rgba(239, 68, 68, 0.4)",
            boxShadow:
              "0 20px 40px -10px rgba(153, 27, 27, 0.5), 0 0 0 1px rgba(239, 68, 68, 0.2)",
          },
        },

        // ⭐ Loading toast
        loading: {
          duration: Infinity,
          icon: "⏳",
          style: {
            background:
              "linear-gradient(135deg, #C9A227 0%, #E5C76B 100%)",
            color: "#0F3D2E",
            border: "1px solid rgba(201, 162, 39, 0.5)",
            boxShadow:
              "0 20px 40px -10px rgba(201, 162, 39, 0.4), 0 0 0 1px rgba(201, 162, 39, 0.3)",
          },
        },

        // ⭐ Custom blank toast (for custom components)
        blank: {
          duration: 5000,
          style: {
            background: "linear-gradient(135deg, #0F3D2E 0%, #1B5E45 100%)",
            color: "#F5F1E8",
            padding: 0,
            borderRadius: "16px",
            maxWidth: "420px",
            minWidth: "320px",
          },
        },
      }}
    />
  );
}
