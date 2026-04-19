import Link from "next/link";
import { Scale } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 border-t border-slate-800 pt-16 pb-8 mt-auto flex-shrink-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          
          {/* Brand & Reliability Column */}
          <div className="md:col-span-2 space-y-6">
            <Link href="/" className="inline-flex items-center gap-2 text-white">
              <div className="bg-teal-500 rounded-lg p-1.5 flex items-center justify-center">
                <Scale className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight hidden sm:inline-block font-outfit">
                E-Tebeka
              </span>
            </Link>
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              <strong className="text-slate-300 font-semibold block mb-1">Source of Reliability</strong>
              Based strictly on official Ethiopian proclamations, the Federal Negarit Gazette, and accredited Ministries. Our database relies on authorized government publications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-slate-400 hover:text-teal-400 text-sm transition-colors">Home</Link></li>
              <li><Link href="/search" className="text-slate-400 hover:text-teal-400 text-sm transition-colors">Laws & Proclamations</Link></li>
              <li><Link href="/about" className="text-slate-400 hover:text-teal-400 text-sm transition-colors">About the Platform</Link></li>
              <li><Link href="/login" className="text-slate-400 hover:text-teal-400 text-sm transition-colors">Sign In</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li>support@e-tebeka.gov.et</li>
              <li>Addis Ababa, Ethiopia</li>
              <li>+251 11 123 4567</li>
            </ul>
          </div>

          {/* Legal / Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Legal Notice</h3>
            <div className="rounded-lg bg-slate-800/50 p-4 border border-slate-700/50">
              <p className="text-slate-400 text-xs leading-relaxed">
                <span className="text-amber-400 font-bold block mb-1">Disclaimer:</span>
                This platform is provided for research and informational purposes only. It does not constitute formal legal advice. Always consult with a licensed professional for legal matters.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} E-Tebeka Digital Legal Repository. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-slate-500">
            <span>Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
