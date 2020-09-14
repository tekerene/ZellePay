/**
*@Discription: Description
*@Author: Teke Rene
*@Contributors: Contributors
*/
<template>
  <section class="home">
    <section class="nav-header">
      <div class="container">
        <div class="row">
          <div class="money col-sm-12 col-md-5">
            <div class="sent-money">
              SEND AND
              <br />RECEIVE MONEY
              <br />WITH ZELLE®
            </div>
            <div class="sub-text text-center">
              <p>Zelle® is a fast, safe, easy and contact-free way to send and receive money with friends, family and others you trust. You can receive money directly into your bank account in minutes1.</p>
              <p>Look for Zelle in your banking app, or click 'Get Started.'</p>
            </div>
            <div class="button-start">
              <button>Get Started</button>
            </div>
          </div>
          <div class="picture col-sm-12 col-md-7">
            <img class="img-fliud" src="../../public/img/sent-money.jpg" alt />
          </div>
        </div>
      </div>
    </section>
    <section class="sent-banner">
      <div class="container">
        <div class="row">
          <div class="p-5 col-md-12 header-text">
            <h1 class="text-center">How to send money with Zelle®</h1>
          </div>
          <div class="text-center column-text d-flex col-12">
            <div class="col-md-4 col-sm-12">
              <h1>1</h1>
              <h3>ACCESS ZELLE®</h3>
              <div class="para-text">
                <p>Get started by enrolling your email or U.S. mobile number through your mobile banking app or with the Zelle app.</p>
              </div>
            </div>
            <div class="col-md-4 col-sm-12">
              <h1>2</h1>
              <h3>PICK A PERSON TO PAY</h3>
              <div class="para-text">
                <p>Get started by enrolling your email or U.S. mobile number through your mobile banking app or with the Zelle app.</p>
              </div>
            </div>
            <div class="col-md-4 col-sm-12">
              <h1>3</h1>
              <h3>CHOOSE THE AMOUNT</h3>
              <div class="para-text">
                <p>Enter the amount to send. Your recipient gets a notification explaining how to complete the payment, simply and quickly.</p>
              </div>
            </div>
          </div>
          <div class="col-md-12 text-center but">
            <button>Get Started</button>
          </div>
        </div>
      </div>
    </section>
    <section class="why-banner">
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-12 header-text">
            <h1>Why Use Zelle®</h1>
          </div>
          <div class="banner-images col-md-12">
            <div class="col-md-4 col-sm-12">
              <img src="../../public/img/image1.jpg" alt="">
              <hr>
              <h3>Fast</h3>
              <p>Whether you’re settling up IOUs or splitting the cost of takeout, you can send money to someone you trust in minutes1 directly to their bank account with Zelle.</p>
            </div>
            <div class="col-md-4 col-sm-12">
              <img src="../../public/img/image1.jpg" alt="">
              <hr>
              <h3>Safe</h3>
              <p>Your money travels safely from the minute you hit send to the minute it hits their bank account. Straight from you to them. So you get peace of mind and so does your recipient.</p>
            </div>
            <div class="col-md-4 col-sm-12">
              <img src="../../public/img/image1.jpg" alt="">
              <hr>
              <h3>Easy</h3>
              <p>Send money with just a few taps on your mobile phone. Even better, you probably already have Zelle in your banking app – no additional download necessary.</p>
            </div>
          </div>
          <div class="p-4 col-md-12">
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: "Home",
  // components: {
  //   HelloWorld
  // }
};
</script>
<style scoped lang="scss">
@import "../assets/style/custom";

.home {
  .nav-header {
    height: 650px;
    padding-top: 6em;
    .sent-money {
      font-weight: 900;
      font-size: 50px;
      text-align: left;
      padding-bottom: 0.7em;
    }
    .sub-text {
      font-weight: 400;
      font-size: 18px;

      p {
        text-align: left;
        padding-bottom: 0.7em;
      }
    }
    .picture {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-content: center;
      height: 100%;
    }
    .picture img {
      width: 510px;
      height: 510px;
      object-fit: fill;
      border-radius: 50%;
    }
    .button-start {
      text-align: left;
      button {
        padding: 1em 3em 1em 3em;
        font-size: 1em;
        background: $lightGray;
        border-radius: 17px;
      }
    }
  }
  .sent-banner {
    min-height: 100vh Auto;
    background: $secondaryWhite;
    .header-text {
      margin-top: 5em;
      h1 {
        font-size: 5em;
        color: gray;
      }
    }
    .column-text {
      padding: 2em;
      h1 {
        padding: 0.5em 1.5em 0.5em 1em;
        border: 1px solid $primaryHeader;
        border-radius: 50%;
        width: 27px;
        margin-left: 3em;
      }
      h3 {
        color: $primaryHeader;
        font-size: 1.5em;
        font-weight: 600;
        padding-bottom: 2em;
      }
      .para-text {
        font-size: 1.5em;
        font-weight: 500;
      }
    }
    .but {
      padding: 2em;
      button {
        padding: 0.5em 3.5em 0.5em 3.5em;
        font-size: 1.6em;
        border: 1px solid $primaryHeader;
        color: $primaryHeader;
      }
    }
  }
  .why-banner {
    padding-top: 2.5em;
    .header-text {
      font-size: 2em;
    }
    .banner-images {
      background: $primaryHeader;
      padding-top:3em;
      img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
      }
    }
    button {
        padding: 0.5em 3.5em 0.5em 3.5em;
        font-size: 1.6em;
        border: 1px solid $primaryHeader;
        color: $primaryHeader;
      }
  }
}
</style>


