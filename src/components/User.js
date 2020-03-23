import React, { useContext } from "react";
import { Card, } from "semantic-ui-react";
import {UserContext,} from "../providers/UserProvider";
import {UserCard, StyledContent, UserHeader, StyledMeta } from "../styles/Global"

const User = () => {
  const {user, dateJoined, firstName, lastName, email}= useContext(UserContext)

  return (
    <UserCard>
      <StyledContent>
        <UserHeader>
          {user}
        </UserHeader>
        <StyledMeta>
          <p>Member since: {dateJoined}</p>
          <hr/>
        </StyledMeta>
      </StyledContent>
      <StyledContent>
        <p>{firstName} {lastName}</p>
        <p>{email}</p>
      </StyledContent>
    </UserCard>
  );
};

export default User;