<script setup lang="ts">
</script>

<template>
  <div>
    <title>{{ $t('myName') }} - {{ $t('contact.title') }}</title>

    <div class="text-gray-900">

      <div class="container mx-auto py-8 flex flex-col lg:flex-row">

        <!-- Left Sidebar -->
        <aside class="w-full lg:w-1/4 shadow-md rounded p-6 mb-6 lg:mb-0">
          <div class="text-center">
            <div class="size-24 lg:size-40 mx-auto bg-gray-300 rounded-full">
              <img src="/imgs/logos/magical-imagery.svg" alt="" class="rounded-full" />
            </div>
            <h2 class="text-xl font-semibold mt-4">Justin Urbanek</h2>
            <p class="text-gray-600 mt-2">
              Apprentice as a Computer Scientist specializing in Application Development at Berufsbildungszentrum
              Wirtschaft, Informatik und Technik (BBZW) Sursee.
            </p>

            <ul class="p-2 shadow bg-base-100 rounded-box w-52">
              <li><a href="#">Google Scholar</a></li>
              <li><a href="#">ORCID</a></li>
              <li><a href="#">PubMed</a></li>
              <li><a href="#">Github</a></li>
              <li><a href="#">Bluesky</a></li>
            </ul>
          </div>
        </aside>

        <!-- Main Content -->
        <main class="w-full lg:w-3/4 shadow-md rounded p-6">
          <h1 class="text-2xl font-semibold">Academic Pages is a ready-to-fork GitHub Pages template for academic
            personal websites</h1>
          <p class="mt-4">
            This is the front page of a website that is powered by the Academic Pages template and hosted on GitHub
            pages. GitHub pages is a free service in which websites are built and hosted from code and data stored in a
            GitHub repository, automatically updating when a new commit is made to the respository. This template was
            forked from the Minimal Mistakes Jekyll Theme created by Michael Rose, and then extended to support the
            kinds of content that academics have: publications, talks, teaching, a portfolio, blog posts, and a
            dynamically-generated CV. You can fork this repository right now, modify the configuration and markdown
            files, add your own PDFs and other content, and have your own site for free, with no ads! An older version
            of this template powers my own personal website at stuartgeiger.com, which uses this Github repository.
          </p>

          <section class="mt-6">
            <h2 class="text-xl text-white font-semibold">A data-driven personal website</h2>
            <p class="mt-2">
              Like many other Jekyll-based GitHub Pages templates, Academic Pages makes you separate the website's
              content from its form. The content & metadata of your website are in structured markdown files, while
              various other files constitute the theme, specifying how to transform that content & metadata into HTML
              pages. You keep these various markdown (.md), YAML (.yml), HTML, and CSS files in a public GitHub
              repository. Each time you commit and push an update to the repository, the GitHub pages service creates
              static HTML pages based on these files, which are hosted on GitHub's servers free of charge.
            </p>
            <p class="mt-2">
              Many of the features of dynamic content management systems (like Wordpress) can be achieved in this
              fashion, using a fraction of the computational resources and with far less vulnerability to hacking and
              DDoSing. You can also modify the theme to your heart's content without touching the content of your site.
              If you get to a point where you've broken something in Jekyll/HTML/CSS beyond repair, your markdown files
              describing your talks, publications, etc. are safe. You can rollback the changes or even delete the
              repository and start over - just be sure to save the markdown files! Finally, you can also write scripts
              that process the structured data on the site, such as this one that analyzes metadata in pages about talks
              to display a map of every location you've given a talk.
            </p>
          </section>

          <section class="mt-6">
            <h2 class="text-2xl text-white font-semibold">Getting started</h2>
            <ul class="list-decimal ml-6 mt-2">
              <li>Register a GitHub account if you don't have one.</li>
              <li>Fork this repository.</li>
              <li>Fork this repository.</li>
              <li>Fork this repository.</li>
              <li>Fork this repository.</li>
            </ul>
          </section>
        </main>

      </div>

    </div>
  </div>
</template>