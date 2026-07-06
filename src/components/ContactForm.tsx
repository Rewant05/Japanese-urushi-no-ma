import { useState } from "react";
import type { FormEvent } from "react";
import { siteData } from "../config/siteData";

export function ContactForm() {
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("入力内容を確認しました。このフォームは架空サイト用のデモのため、実際の送信は行われません。");
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          <span>お名前</span>
          <input autoComplete="name" name="name" required type="text" />
        </label>
        <label>
          <span>メールアドレス</span>
          <input autoComplete="email" name="email" required type="email" />
        </label>
        <label>
          <span>お問い合わせ種別</span>
          <select defaultValue="" name="type" required>
            <option disabled value="">
              選択してください
            </option>
            {siteData.contactTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>会社・団体名</span>
          <input autoComplete="organization" name="organization" type="text" />
        </label>
      </div>
      <label>
        <span>メッセージ</span>
        <textarea name="message" required rows={8} />
      </label>
      <p className="privacy-note">
        送信前にプライバシーポリシーをご確認ください。取得した情報はお問い合わせへの返信と確認のために利用します。
      </p>
      <button className="submit-button" type="submit">
        内容を確認する
      </button>
      {message && (
        <p aria-live="polite" className="form-message">
          {message}
        </p>
      )}
    </form>
  );
}
