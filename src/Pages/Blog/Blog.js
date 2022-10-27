import React from 'react';

const Blog = () => {
    return (
        <div className='m-8'>
            <div className='border-2 mb-4 rounded-lg bg-slate-900 text-cyan-300 p-6 border-slate-900'>
                <h2 className='text-xl font-serif text-center '>What is Cors?</h2>
                <br />
                <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
                <p>For security reasons, browsers restrict cross-origin HTTP requests initiated from scripts.For example, XMLHttpRequest and the Fetch API follow the same-origin policy. This means that a web application using those APIs can only request resources from the same origin the application was loaded from unless the response from other origins includes the right CORS headers.</p>
            </div>
            <div className='border-2 mb-4 rounded-lg bg-slate-900 text-cyan-300 p-6 border-slate-900'>
                <h2 className='text-xl font-serif text-center '>
                    How does the private route work?
                </h2>
                <br />
                <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition.
                    If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
            </div>
            <div className='border-2 mb-4 rounded-lg bg-slate-900 text-cyan-300 p-6 border-slate-900'>
                <h2 className='text-xl font-serif text-center '>What is Node? How does Node work?
                </h2>
                <br />
                <p>Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
                <br />
                <p>Working of Node.js: Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.</p>
            </div>
            <div className='border-2 mb-4 rounded-lg bg-slate-900 text-cyan-300 p-6 border-slate-900'>
                <h2 className='text-xl font-serif text-center '>Why are you using firebase? What other options do you have to implement authentication?</h2>
                <br />
                <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
            </div>
        </div>
    );
};

export default Blog;