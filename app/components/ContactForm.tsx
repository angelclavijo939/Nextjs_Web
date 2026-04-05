"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID  = "service_pu4a3lw";
const TEMPLATE_ID = "template_0b4i5vs";
const PUBLIC_KEY  = "2cZW9NET04WyKeNAV";

export default function ContactForm() {
  const [fields, setFields] = useState({
    nombres: "",
    apellidos: "",
    correo: "",
    telefono: "",
    mensaje: "",
  });
  const [errors, setErrors]     = useState<Record<string, string>>({});
  const [sent, setSent]         = useState(false);
  const [loading, setLoading]   = useState(false);
  const [apiError, setApiError] = useState("");

  const onlyLetters = /^[a-zA-ZÀ-ÿ\s]+$/;

  function validate() {
    const e: Record<string, string> = {};
    if (!fields.nombres || !onlyLetters.test(fields.nombres))
      e.nombres = "Requerido. Solo letras.";
    if (!fields.apellidos || !onlyLetters.test(fields.apellidos))
      e.apellidos = "Requerido. Solo letras.";
    if (!fields.correo || !/\S+@\S+\.\S+/.test(fields.correo))
      e.correo = "Ingresa un correo válido con @.";
    if (!fields.telefono) e.telefono = "Teléfono requerido.";
    if (!fields.mensaje)  e.mensaje  = "El mensaje es requerido.";
    return e;
  }

  async function handleSubmit() {
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;

    setLoading(true);
    setApiError("");

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, fields, PUBLIC_KEY);
      setSent(true);
    } catch (err) {
      console.error(err);
      setApiError("Hubo un error al enviar el mensaje. Inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  }

  if (sent) {
    return (
      <div className="form-success">
        ✅ ¡Mensaje enviado con éxito! Te contactaremos pronto.
      </div>
    );
  }

  return (
    <div className="contact-form reveal reveal-delay-2">
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="nombres">Nombres *</label>
          <input
            type="text" id="nombres" name="nombres"
            placeholder="TU NOMBRE" autoComplete="given-name"
            value={fields.nombres}
            onChange={(e) => setFields({ ...fields, nombres: e.target.value })}
          />
          {errors.nombres && <div className="form-msg">{errors.nombres}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="apellidos">Apellidos *</label>
          <input
            type="text" id="apellidos" name="apellidos"
            placeholder="TUS APELLIDOS" autoComplete="family-name"
            value={fields.apellidos}
            onChange={(e) => setFields({ ...fields, apellidos: e.target.value })}
          />
          {errors.apellidos && <div className="form-msg">{errors.apellidos}</div>}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="correo">Correo Electrónico *</label>
        <input
          type="email" id="correo" name="correo"
          placeholder="tucorreo@email.com" autoComplete="email"
          value={fields.correo}
          onChange={(e) => setFields({ ...fields, correo: e.target.value })}
        />
        {errors.correo && <div className="form-msg">{errors.correo}</div>}
      </div>

      <div className="form-group">
        <label htmlFor="telefono">Teléfono *</label>
        <input
          type="tel" id="telefono" name="telefono"
          placeholder="3100000000" maxLength={15} autoComplete="tel"
          value={fields.telefono}
          onChange={(e) => setFields({ ...fields, telefono: e.target.value })}
        />
        {errors.telefono && <div className="form-msg">{errors.telefono}</div>}
      </div>

      <div className="form-group">
        <label htmlFor="mensaje">Mensaje *</label>
        <textarea
          id="mensaje" name="mensaje"
          placeholder="Cuéntanos sobre tu proyecto..."
          value={fields.mensaje}
          onChange={(e) => setFields({ ...fields, mensaje: e.target.value })}
        />
        {errors.mensaje && <div className="form-msg">{errors.mensaje}</div>}
      </div>

      {apiError && (
        <div className="form-msg" style={{ marginBottom: "12px" }}>
          {apiError}
        </div>
      )}

      <button
        type="button"
        className="btn-submit"
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? "Enviando..." : "Enviar Mensaje →"}
      </button>
    </div>
  );
}
