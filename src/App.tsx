import React, { useState } from "react";
import "./App.css";
import { i18n } from "./translations/i18n";
import { useTranslation } from "react-i18next";

function App() {
  const [language, setLanguage] = useState<string>("en");
  const { t } = useTranslation();
  let lng = language;

  const handleOnClick = (e: any) => {
    e.preventDefault();
    setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="App">
      <select onClick={handleOnClick}>
        <option selected value="en">
          English
        </option>
        <option value="es">Spanish</option>
        <option value="zh">Chinese</option>
        <option value="hindi">Hindi</option>
      </select>

      <div>
        <p>
          <p>{t("welcome")}</p>
          <p>
            {t("date_format_one", { date: new Date() })} ={" "}
            {t("keyWithCount", { count: 3 })}
          </p>
          <p>{t("number_format", { number: 195 })}</p>
        </p>
      </div>
    </div>
  );
}

export default App;
