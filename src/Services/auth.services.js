export const loginUser = ({ email, password }, toast, setIsAuth) => {
    let users = JSON.parse(localStorage.getItem('yrucremeulbnekot')) || [];
    let check = users.filter((ele) => ele.email === email && ele.password === password);
    if (!check.length) {
        toast({
            title: "Invalid Credentials!",
            description: "Enter correct email or password.",
            variant: "subtle",
            isClosable: true,
            duration: 2000,
            status: "error"
        })
    }
    else {
        localStorage.setItem('yrucremeulbnekotUser', JSON.stringify(check[0]));
        toast({
            title: "Login successful.",
            isClosable: true,
            duration: 2000,
            status: "success"
        })
        setTimeout(() => {
            setIsAuth({ data: check[0], loggedin: true });
        }, 1500)
    }
}

export const signupUser = ({ email, fName, lName, password, birthMonth }, toast, setIsAuth) => {
    let users = JSON.parse(localStorage.getItem('yrucremeulbnekot')) || [];
    let check = users.filter((ele) => ele.email === email);
    if (check.length) {
        toast({
            title: "Email is already registered!",
            variant: "subtle",
            isClosable: true,
            duration: 2000,
            status: "error"
        })
    }
    else {
        let user = { email, fName, lName, password, birthMonth };
        users.push(user);
        localStorage.setItem('yrucremeulbnekot', JSON.stringify(users));
        localStorage.setItem('yrucremeulbnekotUser', JSON.stringify(user));
        toast({
            title: "Account created.",
            isClosable: true,
            duration: 2000,
            status: "success"
        })
        setTimeout(() => {
            setIsAuth({ data: user, loggedin: true });
        }, 1500)
    }
}

export const validateUserData = (value) => {
    console.log(value);
    let temp = value;
    // let temp = value.split('').filer((ele) => ele !== ' ').join('');
    return temp;
}