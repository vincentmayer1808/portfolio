const { db } = require("../firebase/firebase");

const addToDB = async (info) => {
    try {
      await db.collection("contact").add(info);

    } catch (err) {
      // console.log(err);
      window.alert(
        "An error ocurred and I couldn,t receive your message, please try again!"
      );
    }
  };
  export default addToDB