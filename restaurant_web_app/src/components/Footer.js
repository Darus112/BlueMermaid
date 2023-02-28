import React from "react";
import "./Footer.css";

export default function Footer() {
    return (
        <div className="main-footer">
                <p>
                    &copy; copyright {new Date().getFullYear()} THICC MEMES | All rights reserved |
                    Terms Of Service | Privacy
                </p>
        </div>
  );
}