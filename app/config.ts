export const repository = 'https://github.com/BenchCommons/perfratio';
export const websiteRepository = 'https://github.com/BenchCommons/website-perfratio';
// Pinned to the published release; update together with the README reference.
export const releaseTag = 'v1.0.0';
export const sourceInstall = `cargo install --git ${repository} --tag ${releaseTag} --locked perfratio`;
