export const validateEmail = email => {
  const atSymbolCheck = email.split("@");

  if (atSymbolCheck.length !== 2) {
    return false;
  } else {
    const periodCheck = atSymbolCheck[1].split(".");
    if (periodCheck.length !== 2) {
      return false;
    }
  }

  return true;
};