import React from 'react';

const Header = () => (
  <section className="py-12 px-4 text-center pb-0">
    <h1 className="text-5xl mb-10 font-semibold font-heading">The Sylar Project</h1>
    <div className="max-w-2xl mx-auto">
      <img className="rounded shadow" src="https://images.unsplash.com/photo-1492681290082-e932832941e6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80" alt="banner" />

      <div>
        <p className="text-black-400 text-xl leading-relaxed mt-10">The Syler Project aims to be a resource for locating local mental health resources no matter where you live. It's important that any and all existing mental health resources are easy to find and as accesible as possible. This is an open source project that is in need of contributers. <a class="underline" href="https://github.com/Rahat-ch/The_Sylar_Project">Check out the repo here</a> and help make the Syler Project an incredible resource. Filter for your location below to see resources in your state</p>
      </div>
    </div>
  </section>
)

export default Header;