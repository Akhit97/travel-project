/**
 * Challenge:
 * - Create a Contact component in another file
 * - Move one of the contact card articles below into that file
 * - import and render 4 instances of that contact card
 *     - Think ahead: what's the problem with doing it this way?
 */

/**
 * Challenge: Fix the code below to use the `props`
 * object values in place of the hardcoded values below
 *
 * Note: There will be a small bug in the code, so do your
 * best to squash it! 🐛
 */

export default function Contact(props) {
  console.log(props);
  return (
    <article className="contact-card">
      <img src={props.img} alt="Photo of Mr. Whiskerson" />
      <h3>{props.name}</h3>
      <div className="info-group">
        <img src="./images/phone-icon.png" alt="phone icon" />
        <p>{props.phonenumber}</p>
      </div>
      <div className="info-group">
        <img src="./images/mail-icon.png" alt="mail icon" />
        <p>{props.email}</p>
      </div>
    </article>
  );
}

const person = {
  img: "./images/mr-whiskerson.png",
  name: "Mr. Whiskerson",
  phone: "(800) 555-1234",
  email: "mr.whiskaz@catnap.meow",
};

const { img, name } = person;
console.log(img, name);
