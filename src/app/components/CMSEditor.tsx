import { useState, useEffect } from 'react';
import { Settings, Save, Eye, Code, Image, Link2, RefreshCw, FileText, X } from 'lucide-react';
import { PageContent, getContentBySlug, getAllPages } from '../cms/content-config';
import { Redirect, getAllRedirects, addRedirect, updateRedirect, deleteRedirect } from '../cms/redirects';
import { ImageMetadata, imageLibrary, updateImage } from '../cms/images';

/**
 * CMS Editor Component
 * 
 * Visual interface for non-technical editors to manage:
 * - Page-level SEO settings
 * - Content editing
 * - Heading levels
 * - Internal links
 * - Image metadata
 * - Redirects
 * 
 * Features:
 * - No developer dependency
 * - Live preview
 * - Validation
 * - Export/import
 */

interface CMSEditorProps {
  onClose?: () => void;
}

export function CMSEditor({ onClose }: CMSEditorProps) {
  const [activeTab, setActiveTab] = useState<'pages' | 'redirects' | 'images'>('pages');
  const [selectedPage, setSelectedPage] = useState<string>('/');
  const [pageContent, setPageContent] = useState<PageContent | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  // Load page content
  useEffect(() => {
    const content = getContentBySlug(selectedPage);
    setPageContent(content);
  }, [selectedPage]);

  // Save changes (in a real CMS, this would save to database)
  const handleSave = async () => {
    setIsSaving(true);
    setSaveMessage('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // In production, this would save to your backend/database
      // await fetch('/api/cms/save', { method: 'POST', body: JSON.stringify(pageContent) });

      setSaveMessage('✓ Changes saved successfully');
      setTimeout(() => setSaveMessage(''), 3000);
    } catch (error) {
      setSaveMessage('✗ Error saving changes');
    } finally {
      setIsSaving(false);
    }
  };

  // Update SEO field
  const updateSEO = (field: string, value: any) => {
    if (!pageContent) return;
    setPageContent({
      ...pageContent,
      seo: {
        ...pageContent.seo,
        [field]: value,
      },
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[200] overflow-y-auto">
      <div className="min-h-screen py-8 px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-2xl">
          {/* Header */}
          <div className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-6 py-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Settings className="w-6 h-6" />
              <h2 className="text-xl font-semibold">Content Management System</h2>
            </div>
            <div className="flex items-center gap-3">
              {saveMessage && (
                <span className="text-sm bg-white/20 px-3 py-1 rounded">
                  {saveMessage}
                </span>
              )}
              <button
                onClick={handleSave}
                disabled={isSaving}
                className="flex items-center gap-2 bg-white text-violet-600 px-4 py-2 rounded hover:bg-gray-100 transition-colors disabled:opacity-50"
              >
                <Save className="w-4 h-4" />
                {isSaving ? 'Saving...' : 'Save Changes'}
              </button>
              {onClose && (
                <button
                  onClick={onClose}
                  className="text-white/80 hover:text-white transition-colors p-2"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200">
            <div className="flex gap-4 px-6">
              <button
                onClick={() => setActiveTab('pages')}
                className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors ${
                  activeTab === 'pages'
                    ? 'border-violet-600 text-violet-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                <FileText className="w-4 h-4" />
                Pages & SEO
              </button>
              <button
                onClick={() => setActiveTab('redirects')}
                className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors ${
                  activeTab === 'redirects'
                    ? 'border-violet-600 text-violet-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                <RefreshCw className="w-4 h-4" />
                Redirects
              </button>
              <button
                onClick={() => setActiveTab('images')}
                className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors ${
                  activeTab === 'images'
                    ? 'border-violet-600 text-violet-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                <Image className="w-4 h-4" />
                Images
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {activeTab === 'pages' && (
              <PagesTab
                selectedPage={selectedPage}
                onSelectPage={setSelectedPage}
                pageContent={pageContent}
                onUpdateSEO={updateSEO}
                onUpdateContent={(field, value) => {
                  if (!pageContent) return;
                  setPageContent({
                    ...pageContent,
                    content: {
                      ...pageContent.content,
                      [field]: value,
                    },
                  });
                }}
              />
            )}

            {activeTab === 'redirects' && <RedirectsTab />}

            {activeTab === 'images' && <ImagesTab />}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Pages & SEO Tab
 */
interface PagesTabProps {
  selectedPage: string;
  onSelectPage: (slug: string) => void;
  pageContent: PageContent | null;
  onUpdateSEO: (field: string, value: any) => void;
  onUpdateContent: (field: string, value: any) => void;
}

function PagesTab({ selectedPage, onSelectPage, pageContent, onUpdateSEO, onUpdateContent }: PagesTabProps) {
  const pages = getAllPages();

  if (!pageContent) {
    return <div className="text-gray-500">Loading...</div>;
  }

  return (
    <div className="grid lg:grid-cols-4 gap-6">
      {/* Page Selector */}
      <div className="lg:col-span-1">
        <h3 className="font-semibold text-gray-900 mb-3">Select Page</h3>
        <div className="space-y-2">
          {pages.map(page => (
            <button
              key={page.id}
              onClick={() => onSelectPage(page.slug)}
              className={`w-full text-left px-3 py-2 rounded transition-colors ${
                selectedPage === page.slug
                  ? 'bg-violet-100 text-violet-700'
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
              }`}
            >
              <div className="font-medium">{page.seo.title}</div>
              <div className="text-xs opacity-70">{page.slug}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Page Editor */}
      <div className="lg:col-span-3 space-y-6">
        {/* URL Slug */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            URL Slug
          </label>
          <input
            type="text"
            value={pageContent.slug}
            onChange={(e) => onUpdateContent('slug', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-violet-500 focus:border-transparent"
          />
          <p className="text-xs text-gray-500 mt-1">
            Full URL: https://thephotocourse.com{pageContent.slug}
          </p>
        </div>

        {/* Meta Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Meta Title
            <span className="ml-2 text-xs font-normal text-gray-500">
              ({pageContent.seo.title.length}/60 characters)
            </span>
          </label>
          <input
            type="text"
            value={pageContent.seo.title}
            onChange={(e) => onUpdateSEO('title', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-violet-500 focus:border-transparent"
            maxLength={60}
          />
          {pageContent.seo.title.length > 60 && (
            <p className="text-xs text-red-600 mt-1">Title is too long (max 60 characters)</p>
          )}
        </div>

        {/* Meta Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Meta Description
            <span className="ml-2 text-xs font-normal text-gray-500">
              ({pageContent.seo.description.length}/160 characters)
            </span>
          </label>
          <textarea
            value={pageContent.seo.description}
            onChange={(e) => onUpdateSEO('description', e.target.value)}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-violet-500 focus:border-transparent"
            maxLength={160}
          />
          {pageContent.seo.description.length > 160 && (
            <p className="text-xs text-red-600 mt-1">Description is too long (max 160 characters)</p>
          )}
        </div>

        {/* Canonical URL */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Canonical URL (optional)
          </label>
          <input
            type="url"
            value={pageContent.seo.canonicalUrl || ''}
            onChange={(e) => onUpdateSEO('canonicalUrl', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-violet-500 focus:border-transparent"
            placeholder="https://thephotocourse.com/page"
          />
        </div>

        {/* Index/Noindex */}
        <div className="flex items-center gap-6">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={!pageContent.seo.noindex}
              onChange={(e) => onUpdateSEO('noindex', !e.target.checked)}
              className="rounded"
            />
            <span className="text-sm text-gray-700">Index this page (allow in search results)</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={!pageContent.seo.nofollow}
              onChange={(e) => onUpdateSEO('nofollow', !e.target.checked)}
              className="rounded"
            />
            <span className="text-sm text-gray-700">Follow links on this page</span>
          </label>
        </div>

        {/* Open Graph */}
        <div className="border-t pt-6">
          <h4 className="font-medium text-gray-900 mb-4">Social Media (Open Graph)</h4>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                OG Title (leave blank to use meta title)
              </label>
              <input
                type="text"
                value={pageContent.seo.ogTitle || ''}
                onChange={(e) => onUpdateSEO('ogTitle', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                placeholder={pageContent.seo.title}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                OG Description (leave blank to use meta description)
              </label>
              <textarea
                value={pageContent.seo.ogDescription || ''}
                onChange={(e) => onUpdateSEO('ogDescription', e.target.value)}
                rows={2}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                placeholder={pageContent.seo.description}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                OG Image URL
              </label>
              <input
                type="url"
                value={pageContent.seo.ogImage || ''}
                onChange={(e) => onUpdateSEO('ogImage', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                placeholder="https://thephotocourse.com/og-image.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Redirects Tab
 */
function RedirectsTab() {
  const [redirects, setRedirects] = useState(getAllRedirects());
  const [isAdding, setIsAdding] = useState(false);
  const [newRedirect, setNewRedirect] = useState<Partial<Redirect>>({
    from: '',
    to: '',
    type: 301,
    enabled: true,
  });

  const handleAddRedirect = () => {
    const redirect = addRedirect(newRedirect as any);
    setRedirects(getAllRedirects());
    setIsAdding(false);
    setNewRedirect({ from: '', to: '', type: 301, enabled: true });
  };

  const handleDeleteRedirect = (id: string) => {
    deleteRedirect(id);
    setRedirects(getAllRedirects());
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-gray-900">Manage Redirects</h3>
        <button
          onClick={() => setIsAdding(true)}
          className="bg-violet-600 text-white px-4 py-2 rounded hover:bg-violet-700 transition-colors text-sm"
        >
          + Add Redirect
        </button>
      </div>

      {isAdding && (
        <div className="bg-gray-50 p-4 rounded border border-gray-200">
          <h4 className="font-medium text-gray-900 mb-3">New Redirect</h4>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">From (old URL)</label>
              <input
                type="text"
                value={newRedirect.from}
                onChange={(e) => setNewRedirect({ ...newRedirect, from: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded"
                placeholder="/old-page"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">To (new URL)</label>
              <input
                type="text"
                value={newRedirect.to}
                onChange={(e) => setNewRedirect({ ...newRedirect, to: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded"
                placeholder="/new-page"
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleAddRedirect}
              className="bg-violet-600 text-white px-4 py-2 rounded hover:bg-violet-700 transition-colors text-sm"
            >
              Add Redirect
            </button>
            <button
              onClick={() => setIsAdding(false)}
              className="text-gray-600 hover:text-gray-900 text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="border border-gray-200 rounded overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left px-4 py-3 text-sm font-medium text-gray-700">From</th>
              <th className="text-left px-4 py-3 text-sm font-medium text-gray-700">To</th>
              <th className="text-left px-4 py-3 text-sm font-medium text-gray-700">Type</th>
              <th className="text-left px-4 py-3 text-sm font-medium text-gray-700">Status</th>
              <th className="text-left px-4 py-3 text-sm font-medium text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {redirects.map(redirect => (
              <tr key={redirect.id}>
                <td className="px-4 py-3 text-sm font-mono text-gray-900">{redirect.from}</td>
                <td className="px-4 py-3 text-sm font-mono text-gray-900">{redirect.to}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{redirect.type}</td>
                <td className="px-4 py-3 text-sm">
                  <span className={`px-2 py-1 rounded text-xs ${
                    redirect.enabled ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {redirect.enabled ? 'Active' : 'Disabled'}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm">
                  <button
                    onClick={() => handleDeleteRedirect(redirect.id)}
                    className="text-red-600 hover:text-red-700 text-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/**
 * Images Tab
 */
function ImagesTab() {
  const [images, setImages] = useState(imageLibrary);
  const [selectedImage, setSelectedImage] = useState<ImageMetadata | null>(null);

  const handleUpdateImage = (field: string, value: any) => {
    if (!selectedImage) return;
    const updated = updateImage(selectedImage.id, { [field]: value });
    if (updated) {
      setSelectedImage(updated);
      setImages([...imageLibrary]);
    }
  };

  return (
    <div className="grid lg:grid-cols-3 gap-6">
      {/* Image List */}
      <div className="lg:col-span-1 space-y-2 max-h-[600px] overflow-y-auto">
        {images.map(img => (
          <button
            key={img.id}
            onClick={() => setSelectedImage(img)}
            className={`w-full text-left p-3 rounded border transition-colors ${
              selectedImage?.id === img.id
                ? 'border-violet-600 bg-violet-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="text-sm font-medium text-gray-900 truncate">{img.id}</div>
            <div className="text-xs text-gray-500 truncate">{img.alt || '(no alt text)'}</div>
          </button>
        ))}
      </div>

      {/* Image Editor */}
      {selectedImage && (
        <div className="lg:col-span-2 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Alt Text (required)</label>
            <textarea
              value={selectedImage.alt}
              onChange={(e) => handleUpdateImage('alt', e.target.value)}
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-violet-500"
              placeholder="Describe what the image shows"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Title (optional)</label>
            <input
              type="text"
              value={selectedImage.title || ''}
              onChange={(e) => handleUpdateImage('title', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-violet-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Caption (optional)</label>
            <input
              type="text"
              value={selectedImage.caption || ''}
              onChange={(e) => handleUpdateImage('caption', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-violet-500"
            />
          </div>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={selectedImage.lazyLoading || false}
              onChange={(e) => handleUpdateImage('lazyLoading', e.target.checked)}
              className="rounded"
            />
            <span className="text-sm text-gray-700">Enable lazy loading</span>
          </label>
        </div>
      )}
    </div>
  );
}

/**
 * CMS Toggle Button
 * Shows a button to open the CMS (only in development)
 */
export function CMSToggleButton() {
  const [isOpen, setIsOpen] = useState(false);

  // Only show in development
  if (process.env.NODE_ENV !== 'development') return null;

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 left-4 z-[100] bg-violet-600 text-white p-3 rounded-full shadow-lg hover:bg-violet-700 transition-colors"
        title="Open CMS Editor (Development Only)"
      >
        <Settings className="w-5 h-5" />
      </button>

      {isOpen && <CMSEditor onClose={() => setIsOpen(false)} />}
    </>
  );
}
