'use client';

import { Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';
import { footerLinks, contactInfo, companyData } from '@/lib/data';
import Logo from './logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background border-t border-border">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Logo className="text-background" />
            </div>
            <p className="text-background/70 leading-relaxed mb-8 text-sm max-w-sm">
              {companyData.description}
            </p>
            <div className="space-y-3">
              <a href={contactInfo.phoneHref} className="flex items-center gap-3 text-sm text-background/75 hover:text-accent transition-colors duration-200">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                {contactInfo.phone}
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-3 text-sm text-background/75 hover:text-accent transition-colors duration-200">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                {contactInfo.email}
              </a>
              <a href={contactInfo.mapsHref} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-sm text-background/75 hover:text-accent transition-colors duration-200">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                {contactInfo.address}
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-sm mb-6 text-background">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold text-sm mb-6 text-background">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold text-sm mb-6 text-background">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/15 pt-8">
          {/* Footer Bottom */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-background/55">
            <p>
              &copy; {currentYear} {companyData.name}. All rights reserved.
            </p>
            <p className="text-background/40">{companyData.foundedNote}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
