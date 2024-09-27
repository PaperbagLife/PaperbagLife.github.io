git subtree split --prefix vue-version/dist -b gh-pages-subtree
git push git@github.com:PaperbagLife/PaperbagLife.github.io.git gh-pages-subtree:gh-pages --force
git branch -D gh-pages-subtree
