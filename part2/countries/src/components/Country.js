import { useState, useEffect } from "react";
import axios from "axios";

function Country({ country }) {
  const { name, capital, area, languages, flags } = country;
  const [temp, setTemp] = useState(undefined);
  const [icon, setIcon] = useState("");
  const [wind, setWind] = useState(undefined);

  const createEndpoint = () => {
    let endpoint = "https://api.openweathermap.org/data/2.5/weather";
    endpoint += `?q=${capital[0]}`;
    endpoint += `&units=metric`;
    endpoint += `&appid=${process.env.REACT_APP_API_KEY}`;
    return endpoint;
  };

  useEffect(() => {
    axios.get(createEndpoint()).then((res) => {
      const {
        data: { main, weather, wind },
      } = res;
      setTemp(main.temp);
      setIcon(weather[0].icon);
      setWind(wind.speed);
    });
  }, []);

  return (
    <div>
      <h2>{name.common}</h2>
      <div>
        <div>capital {capital[0]}</div>
        <div>area {area}</div>
      </div>
      <br />
      <strong>languages</strong>
      <ul>
        {Object.keys(languages).map((key) => (
          <li key={key}>{languages[key]}</li>
        ))}
      </ul>
      <div>
        <img src={flags.png} alt={`${name.common} flag`} />
      </div>
      <h3>Weather in {capital[0]}</h3>
      <div>
        <div>temperature {temp} Celsius</div>
        <div>
          {icon ? (
            <img
              src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
              alt="icon"
            />
          ) : (
            ""
          )}
        </div>
        <div>wind {wind} m/s</div>
      </div>
    </div>
  );
}

export default Country;
