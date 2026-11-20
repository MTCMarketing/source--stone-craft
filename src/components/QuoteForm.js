import React, { useEffect, useId, useState } from "react";
import { business, serviceOptions } from "../data/site";
import { sendQuote } from "../utils/sendQuote";
import Icon from "./Icon";

/** Quote request form. Delivers through GATSBY_FORM_ENDPOINT when set, otherwise opens a pre-filled email. */
export default function QuoteForm() {
  const uid = useId();
  const [service, setService] = useState("");
  const [status, setStatus] = useState({ state: "idle", message: "" });
  const id = (n) => `${uid}-${n}`;

  useEffect(() => {
    const onPick = (e) => setService(e.detail);
    window.addEventListener("rvp:service", onPick);
    return () => window.removeEventListener("rvp:service", onPick);
  }, []);

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    const data = Object.fromEntries(new FormData(form));
    data.service = service;
    setStatus({ state: "sending", message: "" });
    try {
      const { mode } = await sendQuote(data);
      if (mode === "ignored") return setStatus({ state: "idle", message: "" });
      form.reset();
      setService("");
      setStatus({
        state: "success",
        message:
          mode === "mailto"
            ? `Your email app should open with your request ready to send. If it doesn't, call ${business.phone} or write to ${business.email}.`
            : "Thank you. We have your request and will be in touch soon.",
      });
    } catch {
      setStatus({ state: "error", message: `Something went wrong. Please call ${business.phone} or write to ${business.email}.` });
    }
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="field">
        <label htmlFor={id("name")}>Your name</label>
        <input id={id("name")} name="name" type="text" autoComplete="name" required />
      </div>
      <div className="field">
        <label htmlFor={id("phone")}>Phone</label>
        <input id={id("phone")} name="phone" type="tel" autoComplete="tel" inputMode="tel" required minLength={7} />
      </div>
      <div className="field">
        <label htmlFor={id("email")}>
          Email <span>(optional)</span>
        </label>
        <input id={id("email")} name="email" type="email" autoComplete="email" />
      </div>
      <div className="field">
        <label htmlFor={id("service")}>What are you planning?</label>
        <select id={id("service")} name="service" value={service} onChange={(e) => setService(e.target.value)} required>
          <option value="" disabled>
            Choose one
          </option>
          {serviceOptions.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>
      <div className="field field--wide">
        <label htmlFor={id("message")}>
          Tell us about the space <span>(optional)</span>
        </label>
        <textarea id={id("message")} name="message" rows={4} placeholder="Sizes, colors you like, timing, anything that helps." />
      </div>
      <div className="hp" aria-hidden="true">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <button className="btn btn--primary form__submit" type="submit" disabled={status.state === "sending"}>
        {status.state === "sending" ? "Sending…" : "Send request"} <Icon name="arrow" size={16} />
      </button>
      <p className={`form__note ${status.state === "error" ? "is-error" : ""} ${status.state === "success" ? "is-success" : ""}`} role="status" aria-live="polite">
        {status.message || "We reply as soon as we can."}
      </p>
    </form>
  );
}
