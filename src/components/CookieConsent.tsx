
import React from 'react';
import CookieConsent from 'react-cookie-consent';
import { Link } from 'react-router-dom';

const LuminaCookieConsent = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Aceitar"
      cookieName="lumina-gdpr-consent"
      style={{
        background: "#333333",
        color: "#ffffff",
        zIndex: 9999,
        fontSize: "14px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 20px",
      }}
      buttonStyle={{
        background: "#FFD700",
        color: "#333333",
        fontSize: "14px",
        borderRadius: "4px",
        padding: "8px 16px",
      }}
      expires={150}
    >
      <span className="flex-1 text-sm md:text-base">
        Este site usa cookies para melhorar sua experiência. Ao continuar navegando, você concorda com a nossa{" "}
        <Link to="/politica-privacidade" className="text-lumina-gold hover:underline">
          Política de Privacidade
        </Link>
        .
      </span>
    </CookieConsent>
  );
};

export default LuminaCookieConsent;
