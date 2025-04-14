const imagePatterns = [{ hostname: "picsum.photos" }].map((pattern) => ({
  protocol: "https",
  ...pattern,
}));

const nextConfig = {
  images: { remotePatterns: imagePatterns },
};

export default nextConfig;
