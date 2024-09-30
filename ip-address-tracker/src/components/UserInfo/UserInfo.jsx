import { UserInfoDiv, DataDiv, DataName, DataValue } from "./UserInfo.styled"

// eslint-disable-next-line react/prop-types
const UserInfo = ({ipAddress, location, timezone, isp}) => {
  return (
    <UserInfoDiv>
        <DataDiv $hideDivider>
            <DataName>ip address</DataName>
            <DataValue>{ipAddress}</DataValue>
        </DataDiv>
        <DataDiv>
            <DataName>location</DataName>
            <DataValue>{location}</DataValue>
        </DataDiv>
        <DataDiv>
            <DataName>timezone</DataName>
            <DataValue>{timezone}</DataValue>
        </DataDiv>
        <DataDiv>
            <DataName>isp</DataName>
            <DataValue>{isp}</DataValue>
        </DataDiv>
    </UserInfoDiv>
  )
}

export default UserInfo