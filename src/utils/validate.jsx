export const CheckvalidData = (email, password) => {
    const IsemailValid = /[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/.test(email);
    const IspasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if (!IsemailValid) return "Email is not valid"
    if (!IspasswordValid) return "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number."

    return null;

} 