import React, { useState, useRef, useEffect } from 'react';
import { 
  ZoomIn, ZoomOut, Download, Maximize2, Minimize2, 
  RotateCcw, Printer, X, ChevronLeft, ChevronRight, Loader2 
} from 'lucide-react';

const Brochure: React.FC = () => {
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const brochurePath = '/assets/brochure/AR Fertilizer Brochure.png';

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  // Handle zoom
  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.25, 3));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.25, 0.5));
  const handleReset = () => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  // Handle drag
  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoom > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => setIsDragging(false);

  // Handle fullscreen
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  // Handle download
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = brochurePath;
    link.download = 'AR-Fertiler-Brochure.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Handle print
  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>AR Fertilizer Brochure</title>
            <style>
              body { margin: 0; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
              img { max-width: 100%; max-height: 100vh; }
            </style>
          </head>
          <body>
            <img src="${brochurePath}" alt="AR Fertilizer Brochure" />
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
  };

  // Auto-hide controls in fullscreen
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const handleMouseMove = () => {
      setShowControls(true);
      clearTimeout(timeout);
      if (isFullscreen) {
        timeout = setTimeout(() => setShowControls(false), 3000);
      }
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeout);
    };
  }, [isFullscreen]);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-brand-maroon to-brand-maroon-dark py-12 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/10 skew-x-12 transform translate-x-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-3xl md:text-6xl font-black text-white mb-3 md:mb-6 tracking-tighter">Product Brochure</h1>
          <p className="text-brand-emerald text-base md:text-xl max-w-2xl font-medium">
            View and download our complete product catalog featuring our range of fertilizers and agricultural solutions.
          </p>
          <div className="flex flex-wrap gap-4 mt-6 md:mt-8">
            <button
              onClick={handleDownload}
              className="bg-white text-brand-maroon hover:bg-brand-emerald hover:text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-sm md:text-base flex items-center gap-2 shadow-lg transition-all hover:shadow-xl active:scale-95"
            >
              <Download size={18} />
              <span>Download Brochure</span>
            </button>
            <button
              onClick={handlePrint}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-sm md:text-base flex items-center gap-2 transition-all active:scale-95"
            >
              <Printer size={18} />
              <span>Print</span>
            </button>
          </div>
        </div>
      </section>

      {/* Brochure Viewer Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          {/* Viewer Container */}
          <div 
            ref={containerRef}
            className="relative bg-white rounded-2xl md:rounded-3xl shadow-xl overflow-hidden border border-slate-200"
            style={{ height: '60vh', minHeight: '400px', maxHeight: '80vh' }}
          >
            {/* Controls Bar */}
            <div className={`absolute top-0 left-0 right-0 z-20 bg-slate-900/90 backdrop-blur-sm px-4 py-3 flex flex-wrap items-center justify-between gap-3 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleZoomOut}
                  disabled={zoom <= 0.5}
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  title="Zoom Out"
                >
                  <ZoomOut size={20} />
                </button>
                <span className="text-white font-bold text-sm min-w-[60px] text-center">
                  {Math.round(zoom * 100)}%
                </span>
                <button
                  onClick={handleZoomIn}
                  disabled={zoom >= 3}
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  title="Zoom In"
                >
                  <ZoomIn size={20} />
                </button>
                <button
                  onClick={handleReset}
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-all ml-2"
                  title="Reset View"
                >
                  <RotateCcw size={18} />
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={toggleFullscreen}
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-all"
                  title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
                >
                  {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
                </button>
                <button
                  onClick={handleDownload}
                  className="p-2 bg-brand-maroon hover:bg-brand-maroon-dark rounded-lg text-white transition-all"
                  title="Download"
                >
                  <Download size={20} />
                </button>
              </div>
            </div>

            {/* Zoom Level Indicator */}
            {zoom > 1 && (
              <div className="absolute bottom-4 left-4 z-10 bg-slate-900/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-bold">
                Drag to pan • Scroll to zoom
              </div>
            )}

            {/* Brochure Image Container */}
            <div 
              className="w-full h-full overflow-hidden flex items-center justify-center cursor-grab active:cursor-grabbing"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              style={{ 
                cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default'
              }}
            >
              <img
                src={brochurePath}
                alt="AR Fertilizer Brochure"
                className="max-w-full max-h-full object-contain transition-transform duration-200 select-none"
                style={{ 
                  transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
                  transformOrigin: 'center center'
                }}
                draggable={false}
                onLoad={handleImageLoad}
              />
            </div>

            {/* Loading State */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-slate-50 z-10">
                <div className="flex flex-col items-center">
                  <Loader2 className="animate-spin text-brand-maroon mb-3" size={40} />
                  <p className="text-slate-500 text-sm font-medium">Loading brochure...</p>
                </div>
              </div>
            )}
          </div>

          {/* Instructions */}
          <div className="mt-6 text-center">
            <p className="text-slate-500 text-sm md:text-base font-medium">
              <span className="hidden md:inline">Use the controls above to zoom, pan, download, or view in fullscreen.</span>
              <span className="md:hidden">Pinch to zoom • Swipe to pan • Use buttons for more options</span>
            </p>
          </div>
        </div>
      </section>

      {/* Alternative Download Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-[2rem] p-8 md:p-16 text-center border border-slate-200">
            <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-4 md:mb-6">Need a Physical Copy?</h2>
            <p className="text-slate-600 text-base md:text-lg mb-8 max-w-2xl mx-auto font-medium">
              Download our digital brochure or contact us to receive a printed version delivered to your doorstep.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="bg-brand-maroon hover:bg-brand-maroon-dark text-white px-8 py-4 rounded-full font-bold text-base shadow-lg hover:shadow-xl transition-all active:scale-95"
              >
                Contact Us
              </a>
              <a
                href="/products"
                className="bg-white text-slate-700 hover:text-brand-maroon border-2 border-slate-200 hover:border-brand-maroon px-8 py-4 rounded-full font-bold text-base transition-all active:scale-95"
              >
                Browse Products
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Brochure;

