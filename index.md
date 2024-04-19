---
title: Home Page
layout: Nav
---

<div class="container">
    <div class="intro">
      <h2>Welcome to My Website!</h2>
      <p>
      Well, I don't know what to write here. For now, I will list my post here for better access.
      get ready to dive into the world of numbers, charts, Analytics and maybe machine learning! 🚀✨
      </p>
    </div>
    <div class="post-container">
      {% for post in site.posts %}
      <div class="shortpost">
        <div class='Title'>
          <h2><a href='{{ post.url }}' class='left-side'>{{ post.title }}</a></h2>
          <p class="post-date">{{post.date | date: "%b %d, %Y"}}</p> 
        </div>      
        <p class="post-des">{{post.description}}
        </p>
      </div>

{% endfor %}
  </div>
</div> 