import { Footer } from 'flowbite-react';
import React from 'react';

const Foo = () => {
    return (   
        <Footer className='border-2 border-slate-900' container={true}>
        <div className="w-full text-center">
          <div className="w-full flex items-center justify-center">
            <Footer.LinkGroup>
              <Footer.Link href="#">
                About
              </Footer.Link>
              <Footer.Link href="#">
                Privacy Policy
              </Footer.Link>
              <Footer.Link href="#">
                Licensing
              </Footer.Link>
              <Footer.Link href="#">
                Contact
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <Footer.Divider />
          <Footer.Copyright
            href="#"
            by="Pedagog™"
            year={2022}
          />
        </div>
      </Footer>
    );
};

export default Foo;