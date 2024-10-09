'use client';
import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageSquare, BarChart, Zap, DollarSign, Users, Calendar, CheckCircle } from "lucide-react";
import Image from 'next/image';

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const canvasRef = useRef(null);
  const stars = [];

  // Generate stars
  for (let i = 0; i < 100; i++) {
    stars.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      radius: Math.random() * 2 + 1,
      alpha: Math.random(),
      speed: Math.random() * 0.5 + 0.1,
    });
  }

  // Example function to draw on the canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const drawStars = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach(star => {
        context.beginPath();
        context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        context.fill();
      });
    };

    const animateStars = () => {
      stars.forEach(star => {
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });
      drawStars();
      requestAnimationFrame(animateStars);
    };

    animateStars();
  }, [stars]);

  // Smooth scroll to section
  const handleScroll = (event, section) => {
    event.preventDefault();
    const target = document.querySelector(section);
    target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#545454] text-white relative">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" style={{ pointerEvents: 'none' }} />
      <header className="fixed top-0 w-full bg-[#444444] z-50 border-b border-gray-800 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link className="flex items-center justify-center" href="#">
            <span className="ml-2 text-lg font-bold ">Yeemail Agency</span>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link className="text-sm font-medium hover:text-gray-300 transition-colors duration-300" href="#services" onClick={(e) => handleScroll(e, '#services')}>
              Services
            </Link>
            <Link className="text-sm font-medium hover:text-gray-300 transition-colors duration-300" href="#benefits" onClick={(e) => handleScroll(e, '#benefits')}>
              Benefits
            </Link>
            <Link className="text-sm font-medium hover:text-gray-300 transition-colors duration-300" href="#faq" onClick={(e) => handleScroll(e, '#faq')}>
              FAQ
            </Link>
            <Link className="text-sm font-medium hover:text-gray-300 transition-colors duration-300" href="#book-audit" onClick={(e) => handleScroll(e, '#book-audit')}>
              Book Audit
            </Link>
          </nav>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 p-4">
            <Link className="block py-2 hover:text-gray-300 transition-colors duration-300" href="#services" onClick={(e) => handleScroll(e, '#services')}>
              Services
            </Link>
            <Link className="block py-2 hover:text-gray-300 transition-colors duration-300" href="#benefits" onClick={(e) => handleScroll(e, '#benefits')}>
              Benefits
            </Link>
            <Link className="block py-2 hover:text-gray-300 transition-colors duration-300" href="#faq" onClick={(e) => handleScroll(e, '#faq')}>
              FAQ
            </Link>
            <Link className="block py-2 hover:text-gray-300 transition-colors duration-300" href="#book-audit" onClick={(e) => handleScroll(e, '#book-audit')}>
              Book Audit
            </Link>
          </div>
        )}
      </header>
      <main className="flex-1 pt-16">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[#545454]">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text ">
                  Skyrocket Your E-commerce Revenue with Email & SMS Marketing
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Unlock the full potential of your DTC brand with our done-for-you email and SMS marketing services. No limits, just results.
                </p>
              </div>
              <div className="w-full max-w-sm">
                <Button size="lg" className="w-full bg-[#6D6D6D] hover:bg-[#7C7C7C] transition-colors">
                  <Link href="https://calendar.google.com/calendar">Book a Free Audit</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#545454]" id="services">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <MessageSquare className="h-12 w-12 mb-4 text-[#6D6D6D]" />
                <h3 className="text-xl font-bold mb-2">Email Campaign Management</h3>
                <p className="text-gray-400">We handle everything from strategy to execution, ensuring your campaigns engage your audience effectively.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <DollarSign className="h-12 w-12 mb-4 text-[#6D6D6D]" />
                <h3 className="text-xl font-bold mb-2">SMS Marketing Solutions</h3>
                <p className="text-gray-400">Reach your customers directly on their phones with our tailored SMS marketing strategies.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Users className="h-12 w-12 mb-4 text-[#6D6D6D]" />
                <h3 className="text-xl font-bold mb-2">Audience Segmentation</h3>
                <p className="text-gray-400">We create tailored segments to ensure your messages resonate with the right audience.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Calendar className="h-12 w-12 mb-4 text-[#6D6D6D]" />
                <h3 className="text-xl font-bold mb-2">Automated Workflows</h3>
                <p className="text-gray-400">Set up automated workflows that nurture leads and engage customers at the right moments.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <CheckCircle className="h-12 w-12 mb-4 text-[#6D6D6D]" />
                <h3 className="text-xl font-bold mb-2">Analytics & Reporting</h3>
                <p className="text-gray-400">Get actionable insights into your campaigns with our comprehensive analytics and reporting.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <BarChart className="h-12 w-12 mb-4 text-[#6D6D6D]" />
                <h3 className="text-xl font-bold mb-2">Strategy Development</h3>
                <p className="text-gray-400">Work with our experts to develop a winning email and SMS marketing strategy tailored to your brand.</p>
              </div>
            </div>
          </div>
        </section>
                    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#444444]" id="benefits">
              <div className="container px-4 md:px-6 mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 text-white">Why Choose Yeemail Agency?</h2>
                <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
                  <div className="bg-[#545454] p-6 rounded-lg shadow-lg">
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                        <AccordionTrigger className="text-lg font-semibold text-white">Benefit 1: Expert Team</AccordionTrigger>
                        <AccordionContent className="text-gray-300">
                          <p>Our team consists of email marketing experts who stay up to date with the latest trends.</p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                  <div className="bg-[#545454] p-6 rounded-lg shadow-lg">
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-2">
                        <AccordionTrigger className="text-lg font-semibold text-white">Benefit 2: Proven Results</AccordionTrigger>
                        <AccordionContent className="text-gray-300">
                          <p>We have a track record of delivering measurable results for our clients.</p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                  <div className="bg-[#545454] p-6 rounded-lg shadow-lg">
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-3">
                        <AccordionTrigger className="text-lg font-semibold text-white">Benefit 3: Personalized Strategies</AccordionTrigger>
                        <AccordionContent className="text-gray-300">
                          <p>We customize our strategies to meet the unique needs of each client.</p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-[#444444]" id="faq">
  <div className="container px-4 md:px-6 mx-auto">
    <h2 className="text-3xl font-bold text-center mb-12 text-white">Frequently Asked Questions</h2>
    <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
      <div className="bg-[#545454] p-6 rounded-lg shadow-lg">
        <Accordion type="single" collapsible>
          <AccordionItem value="faq-1">
            <AccordionTrigger className="text-lg font-semibold text-white">1. How does Yeemail Agency help increase revenue through email marketing?</AccordionTrigger>
            <AccordionContent className="text-gray-300">
              <p>We develop targeted email campaigns that engage your audience, nurture leads, and drive conversions, ultimately boosting your revenue.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="bg-[#545454] p-6 rounded-lg shadow-lg">
        <Accordion type="single" collapsible>
          <AccordionItem value="faq-2">
            <AccordionTrigger className="text-lg font-semibold text-white">2. What types of email campaigns do you offer?</AccordionTrigger>
            <AccordionContent className="text-gray-300">
              <p>We offer various types of campaigns, including promotional emails, newsletters, abandoned cart reminders, and automated drip campaigns tailored to your business goals.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="bg-[#545454] p-6 rounded-lg shadow-lg">
        <Accordion type="single" collapsible>
          <AccordionItem value="faq-3">
            <AccordionTrigger className="text-lg font-semibold text-white">3. How can you improve our email open and click-through rates?</AccordionTrigger>
            <AccordionContent className="text-gray-300">
              <p>We utilize A/B testing, optimize subject lines, segment your audience for personalized content, and analyze performance metrics to continually improve engagement rates.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="bg-[#545454] p-6 rounded-lg shadow-lg">
        <Accordion type="single" collapsible>
          <AccordionItem value="faq-4">
            <AccordionTrigger className="text-lg font-semibold text-white">4. Can you help us with email automation?</AccordionTrigger>
            <AccordionContent className="text-gray-300">
              <p>Absolutely! We set up automated workflows to send timely messages based on user behavior, ensuring that your audience receives relevant content when it matters most.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="bg-[#545454] p-6 rounded-lg shadow-lg">
        <Accordion type="single" collapsible>
          <AccordionItem value="faq-5">
            <AccordionTrigger className="text-lg font-semibold text-white">5. How do you measure the success of email marketing campaigns?</AccordionTrigger>
            <AccordionContent className="text-gray-300">
              <p>We track key performance indicators (KPIs) such as open rates, click-through rates, conversion rates, and ROI to assess and optimize our email marketing efforts.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="bg-[#545454] p-6 rounded-lg shadow-lg">
        <Accordion type="single" collapsible>
          <AccordionItem value="faq-6">
            <AccordionTrigger className="text-lg font-semibold text-white">6. What is the expected timeline for seeing results?</AccordionTrigger>
            <AccordionContent className="text-gray-300">
              <p>While some results can be seen quickly, such as open and click rates, significant revenue growth may take a few months as we refine strategies and build your email list.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  </div>
</section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#545454]" id="book-audit">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Ready to Get Started?</h2>
            <div className="flex justify-center">
              <Button className="bg-[#6D6D6D] hover:bg-[#7C7C7C] transition-colors">
                <Link href="https://calendar.google.com/calendar">Book a Free Audit</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-4 bg-[#444444]">
        <div className="container mx-auto text-center text-gray-400">
          © {new Date().getFullYear()} Yeemail Agency. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
