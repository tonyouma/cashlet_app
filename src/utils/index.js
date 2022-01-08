export const getInitials = (name) => {
    let names = name.split(' ');
    let initials = names[0].charAt(0).toUpperCase() + names[names.length - 1].charAt(0).toUpperCase();
    return initials;
}

export const getGreeting = () => {
    var date = new Date();
    var hour = date.getHours();
    if (hour < 12) {
        return "Good morning";
    } else if (hour < 17) {
        return "Good afternoon";
    } else {
        return "Good evening";
    }
}

export const formatCurrency = (amount) => {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}