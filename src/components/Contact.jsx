import React, { useState } from "react";
import "../styles/styles.css";

export default function Contact() {
    const [enviado, setEnviado] = useState(false);

    const manejarEnvio = (e) => {
        e.preventDefault();
        setEnviado(true);
        setTimeout(() => setEnviado(false), 4000);
    };

    return (
        <div className="contact-form container mt-5">
            {enviado && (
                <div className="alert alert-success text-center">
                    ¡Mensaje enviado exitosamente!
                </div>
            )}
            <h2 className="text-center mb-4">Contáctanos</h2>
            <form onSubmit={manejarEnvio}>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="nombre" placeholder="Tu nombre" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Correo electrónico</label>
                    <input type="email" className="form-control" id="email" placeholder="Tu correo electrónico" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Mensaje</label>
                    <textarea className="form-control" id="mensaje" rows="4" placeholder="Escribe tu mensaje aquí..."></textarea>
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </div>
            </form>
        </div>
    );
}
