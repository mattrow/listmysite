'use client';

import { ArrowRight, Shield, Zap, Star, ClipboardCheck } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { FeatureCard } from './components/FeatureCard';
import { PricingCard } from './components/PricingCard';
import { DomainAuthorityDemo } from './components/DomainAuthorityDemo';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Navbar />

      <main>
        {/* Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Boost Your Site's Authority with
              <span className="text-yellow-400"> 100+ Quality Backlinks</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Get your website listed on high-authority directories with our manual submission service. Save 30+ hours of work and see results within 7 days.
            </p>
            <div className="flex justify-center space-x-4">
              <button
                className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors flex items-center"
              >
                Start Growing Your Authority <ArrowRight className="ml-2" />
              </button>
            </div>
            <div className="mt-6 text-gray-400">
              🚀 Launch Discount: Only 3 spots left at $99 (Regular: $159)
            </div>
          </div>
        </div>

        {/* Domain Authority Demo */}
        <div className="py-20 bg-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <DomainAuthorityDemo />
          </div>
        </div>

        {/* Features */}
        <div className="py-20" id="features">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                Icon={ClipboardCheck}
                title="Manual Submission"
                description="Each submission is carefully handled by our team to ensure maximum quality and acceptance rate."
              />
              <FeatureCard
                Icon={Shield}
                title="Quality Backlinks"
                description="All directories are manually vetted with high domain authority scores."
              />
              <FeatureCard
                Icon={Zap}
                title="SEO Boost"
                description="Improve your search rankings with diverse, quality backlinks from trusted sources."
              />
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="py-20 bg-gray-800/50" id="pricing">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <PricingCard
                title="Starter Pack"
                price={79}
                features={[
                  "50 Directory Listings",
                  "Manual Submission",
                  "Real-time Submission Report",
                  "14-Day Delivery",
                  "Email Support"
                ]}
              />
              <PricingCard
                title="Pro Pack"
                price={99}
                originalPrice={159}
                features={[
                  "100 Directory Listings",
                  "Priority Manual Submission",
                  "Real-time Submission Report",
                  "7-Day Delivery",
                  "Priority Support"
                ]}
                isPopular
                spotsLeft={3}
              />
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div>
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 inline-block" />
              ))}
            </div>
            <p className="mt-4">
              "ListMySite.io helped us increase our domain authority by 15 points in just two months. Their manual submission process ensured quality backlinks that made a real difference."
            </p>
            <p className="mt-2">
              - Alex Chen, Founder @ TechStartup.com
            </p>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Zap className="w-6 h-6 text-yellow-400" />
              <span className="font-semibold">listmysite.io</span>
            </div>
            <div className="text-sm text-gray-400">
              © 2024 ListMySite.io. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
