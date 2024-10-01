import { useUserInfo } from "../../context/UserInfoContext"
import { UserInfoDiv, DataDiv, DataName, DataValue } from "./UserInfo.styled"

const UserInfo = () => {

    const {ipData} = useUserInfo()

    const {ip, location, timezone, isp} = ipData

  return (
    <UserInfoDiv>
        <DataDiv $hideDivider>
            <DataName>ip address</DataName>
            <DataValue>{ip}</DataValue>
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