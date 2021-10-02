import UserContext, { UserState } from "./store";
import { useContext, useState } from "react";

function ConsumerComponent() {
  const user = useContext<UserState>(UserContext);

  return (
    <div>
      <div>First name:{user.firstName}</div>
      <div>Last name:{user.lastName}</div>
    </div>
  );
}

function UseContextComponent() {
  const [user, setUser] = useState<UserState>({
    firstName: "Amy",
    lastName: "K",
  });
  return (
    <UserContext.Provider value={user}>
      <ConsumerComponent />

      <button
        onClick={() => {
          setUser({
            firstName: "Test First name",
            lastName: "Test Last name",
          });
        }}
      >
        Change context
      </button>
    </UserContext.Provider>
  );
}

export default UseContextComponent;
