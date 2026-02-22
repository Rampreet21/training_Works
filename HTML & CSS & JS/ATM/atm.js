let balance = 1000;

function pin() {
  const epin = document.getElementById("pin").value;
  const euser = document.getElementById("euser").value;

  if (epin == 212) {
    // console.log(epin);

    document.getElementById("user").innerText = euser;
    document.getElementById("error").innerText = "";
    document.getElementById("cf").style.display = "block";
    document.getElementById("wf").style.display = "none";
  } else {
    console.log("error");
    document.getElementById("error").style.color = "red";
    document.getElementById("error").innerText = "PIN is Worng!";
  }
}

function check() {
  const choice = document.getElementById("choice").value;
  console.log(typeof choice);
  switch (choice) {
    case "1":
      document.getElementById("bf").style.display = "block";
      document.getElementById("balance").innerText = balance;
      document.getElementById("error").innerText = "";
      document.getElementById("cf").style.display = "none";
      break;

    case "2":
      document.getElementById("withf").style.display = "block";
      document.getElementById("error").innerText = "";
      document.getElementById("cf").style.display = "none";
      break;

    case "3":
      document.getElementById("depof").style.display = "block";
      document.getElementById("error").innerText = "";
      document.getElementById("cf").style.display = "none";
      break;

    default:
      document.getElementById("error").style.color = "red";
      document.getElementById("error").innerText = "Choice is invaild";
  }
}

function withbtn() {
  const wAmount = document.getElementById("witha").value;
  if (wAmount < balance && wAmount > 0) {
    balance -= wAmount;
    document.getElementById("error").style.color = "green";
    document.getElementById("error").innerText =
      `$${wAmount} is Withdraw. Now Balance is $${balance}`;
    console.log(wAmount);
  } else {
    if (wAmount <= 0) {
      document.getElementById("error").style.color = "red";
      document.getElementById("error").innerText = "Please Enter CORRECT AMOUNT!";
    } else {
      document.getElementById("error").style.color = "red";
      document.getElementById("error").innerText = "Not Enough Balance!";
    }
  }
}

function depobtn() {
  const dAmount = document.getElementById("depoa").value;
  if (dAmount <= 100000 && dAmount > 0) {
    balance += Number(dAmount);
    document.getElementById("error").style.color = "green";
    document.getElementById("error").innerText =
      `$${dAmount} is Deposit. Now Balance is $${balance}`;
    console.log(dAmount);
  } else {
    document.getElementById("error").style.color = "red";
    document.getElementById("error").innerText = "$100000 Deposit Limit!";
  }
}
