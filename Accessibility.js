import React from 'react';
// import Home from '../sideNavbar/home';
const Accessibility = () => {
  return (

    <>

      {/* aria */}
      <br /><div role="button" onClick={() => alert('Button clicked!')} style={{ cursor: 'pointer', fontSize: '20px' }}> Click me  </div>

      {/* keyboard navigation */}
      <div>
        <br /> <button onClick={() => alert('Button 1 !')}>Button 1</button>
        <br /> <button onClick={() => alert('Button 2 !')}>Button 2</button>
      </div>

      <div style={{ color: 'gray', fontSize: '16px' }}>
        <br />This is a sample text with sufficient contrast and readable font size.
      </div>

      {/* form control */}
      <br />
      <form>
        Name:
        <input type="text" id="name" name="name" />
        Email:
        <input type="email" id="email" name="email" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Accessibility;
