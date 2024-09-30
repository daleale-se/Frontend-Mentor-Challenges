const isIpv4 = (str) => {
    const regex = /\b(?:\d{1,3}\.){3}\d{1,3}\b/
    return regex.test(str)
}

const isIpv6 = (str) => {
    const regex = /\b((?:[a-fA-F0-9]{1,4}:){7}[a-fA-F0-9]{1,4}|(?:[a-fA-F0-9]{1,4}:){1,7}:|(?:[a-fA-F0-9]{1,4}:){1,6}:[a-fA-F0-9]{1,4}|(?:[a-fA-F0-9]{1,4}:){1,5}(?::[a-fA-F0-9]{1,4}){1,2}|(?:[a-fA-F0-9]{1,4}:){1,4}(?::[a-fA-F0-9]{1,4}){1,3}|(?:[a-fA-F0-9]{1,4}:){1,3}(?::[a-fA-F0-9]{1,4}){1,4}|(?:[a-fA-F0-9]{1,4}:){1,2}(?::[a-fA-F0-9]{1,4}){1,5}|[a-fA-F0-9]{1,4}:(?:(?::[a-fA-F0-9]{1,4}){1,6})|:(?:(?::[a-fA-F0-9]{1,4}){1,7}|:))\b/
    return regex.test(str)
}

const isDomain = str => {
    const regex = /\b(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6})\b/
    return regex.test(str)
}

export const identifyType = (inputValue) => {
    if (isIpv4(inputValue)) return 'IPv4';
    if (isIpv6(inputValue)) return 'IPv6';
    if (isDomain(inputValue)) return 'Domain';
    return 'Invalid';
};

export const box = () => {

    return {
    }
}
