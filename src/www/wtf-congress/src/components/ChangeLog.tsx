'use client';
import { trpc } from '@/utils/trpc';
import { remark } from 'remark';
import html from 'remark-html';
import { useMemo } from 'react';
import sanitizeHtml from 'sanitize-html';

const defaultOptions = {
  allowedTags: [
    'b',
    'i',
    'em',
    'strong',
    'a',
    'li',
    'ul',
    'ol',
    'p',
    'br',
    'h3',
    'h1',
    'h2',
  ],
  allowedAttributes: {
    a: ['href'],
  },
  // allowedIframeHostnames: ['www.youtube.com'],
};

const sanitize = (dirty: any, options: any) => ({
  __html: sanitizeHtml(dirty, { ...defaultOptions, ...options }),
});

const SanitizeHTML = ({
  html,
  options,
}: {
  html: string | undefined;
  options?: any;
}) => <div dangerouslySetInnerHTML={sanitize(html, options)} />;

export const ChangeLog = () => {
  const { data } = trpc.changelog.useQuery();

  console.log(data);
  return (
    <div>
      <SanitizeHTML html={data?.content} />{' '}
    </div>
  );
};

export default ChangeLog;
