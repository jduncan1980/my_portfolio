import React from "react";
import { Container, Flex, Text, Image, Link } from "theme-ui";
import Footer from "src/components/footer/Footer";
import MainHeading from "src/components/MainHeading";
import SEO from "src/components/seo";
import image1 from "src/images/jason1.jpg";
import image2 from "src/images/jason2.jpg";
import image3 from "src/images/jason3.jpg";

function about() {
  return (
    <Container
      sx={{
        alignItems: "center",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <SEO title="About" />
      <MainHeading>Me.</MainHeading>
      <Flex sx={{ flexDirection: "column", alignItems: "center" }}>
        <Flex
          variant="aboutSections"
          sx={{ flexDirection: ["column", null, null, "row"] }}
        >
          <Image src={image1} variant="aboutImg" alt="Jason" />
          <Text variant="default">
            After a decade and a half running my own dog walking business (and
            in spite of my love for furry four-legged friends), I decided it
            time for a new challenge. Though it seems like a stretch to pivot
            from dog walking to tech, I’ve gained many valuable insights that I
            think apply to development. “Computers aren’t really like dogs,
            though”, you say… or are they? Puppies and the poorly-trained don’t
            always do what you want them to, but with patience and persistance,
            they eventually comply. I think the same can be said about HTML
            elements styled with CSS! <br />
            <br />
            As a self-employed businessperson, the first thing I learned was
            that clients often have impossible-to-meet demands, but you can keep
            them happy by figuring out what they need, and what you're able to
            deliver. And when you don’t have a boss, you quickly learn
            accountability: there’s no passing the buck if anything goes wrong.
            As a dog walker, I was extremely motivated to find new business and
            increase my client base, and did so by offering flexible and
            reliable service. When you run a tiny business, this is a necessity.
            When writing code, it’s important to make that code completely
            reliable, and flexible enough that it can be updated when necessary.
          </Text>
        </Flex>
        <Flex
          variant="aboutSections"
          sx={{ flexDirection: ["column-reverse", null, null, "row"] }}
        >
          <Text variant="default">
            At forty one years old, I am not a digital native. I remember the
            online experience of the early 90s. I got my first computer, a Dell
            386 (with AOL!), and gained access to a whole new world of
            information. Today, it’s a different world-wide-web. My earliest
            coding attempts involved various low-budget personal sites, often
            laid out with frames… remember frames? Back then, you just wrote
            HTML and inline styles, and it was all you had. Now, with frameworks
            like React, creating beautiful, interactive web experiences is a
            breeze. <br />
            <br />
            Fast-forward to the present: Before I began studying web
            development, most of my time in front of a laptop was spent
            producing electronic music. I like to experiment, and I started
            writing basic scripts to control music software. Being able to build
            the tools you need instead of having to rely on what’s readily
            available is a game changer. It was challenging at first, but the
            more I worked on it, the better I got, and it didn’t take long to
            realize that I could write code for a living if I was willing to put
            in the work. I taught myself as much as I could through various
            online tutorials, and eventually enrolled in the web development
            program at Lambda School.
          </Text>
          <Image src={image2} variant="aboutImg" alt="Jason at Guitar Center" />
        </Flex>
        <Flex
          variant="aboutSections"
          sx={{ flexDirection: ["column", null, null, "row"] }}
        >
          <Image src={image3} variant="aboutImg" alt="Jason at party" />
          <Text variant="default">
            My time at Lambda was incredibly rewarding. I started with seemingly
            more experience than many of the other students, some of whom came
            to me for help when their team leads weren’t available. I try to
            make sure they actually understand what I’m explaining. “Center
            someones Div, and they will have a website. Teach that person
            Flexbox, and they can be a web developer” is a silly joke you might
            hear from your dad, but I really enjoy teaching others, and find I
            often learn myself in the process. I was encouraged to apply for a
            team lead position at Lambda by both my team lead and the section
            lead of my cohort, but unfortunately, the program was discontinued
            before I got the chance.
            <br />
            <br />
            Currently, I'm practicing on Data Structures and Algorithms, and
            searching for my first role in tech. I find the job search process
            much more difficult than the actual coding, but my attitude is that
            if I put in the work, I can't fail.
          </Text>
        </Flex>
        <Flex sx={{ alignItems: "center" }}>
          <Link
            href="https://docs.google.com/document/d/1cloWMn1YfQTBH9n4-cMT7WqiiEu62aby42e9zgN6434/edit?usp=sharing"
            variant="cardLink"
            target="_blank"
            rel="noopener"
          >
            My Resume
          </Link>
        </Flex>
      </Flex>
      <Footer />
    </Container>
  );
}

export default about;
