import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
export default function Main({ match }) {
  const [state, setState] = useState();
  const [mainState, setMainState] = useState({});
  const fetchDate = async () => {
    const data = await fetch(
      ` https://public-api.tracker.gg/apex/v1/standard/profile/${match.params.platform}/${match.params.id}`,
      {
        headers: {
          "TRN-Api-Key": "fc39a867-8d1f-4fd4-847c-cec688812dc1",
        },
      }
    );
    const player = await data.json();
    console.log(player.data);
    try {
      setState(player.data.stats[0].value);
      setMainState(player.data.metadata);
    } catch (e) {
      return <p>error...</p>;
    }
  };
  useEffect(() => {
    fetchDate();
  }, []);

  return (
    <div>
      <h1>Level: {state}</h1>
      <p>Rank: {mainState.rankName}</p>
      <img src={mainState.rankImage} />
    </div>
  );
}
