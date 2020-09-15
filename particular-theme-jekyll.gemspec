# coding: utf-8

Gem::Specification.new do |spec|
  spec.name                    = "particular-theme-jekyll"
  spec.version                 = "0.1"
  spec.authors                 = ["Michael Ashton"]

  spec.summary                 = %q{Particular is a cheerful, responsive Bootstrap theme for hosting personal resumés.}
  spec.homepage                = "https://github.com/ashtonmv/particular-theme"
  spec.licenses                = ["MIT"]

  spec.metadata["plugin_type"] = "theme"

  spec.files                   = `git ls-files -z`.split("\x0").select do |f|
    f.match(%r{^(assets|_(includes|layouts|posts)/|(LICENSE|README)((\.(txt|md|markdown)|$)))}i)
  end

  spec.add_runtime_dependency "jekyll", "~> 4.0"
  spec.add_runtime_dependency "jekyll-paginate", "~> 1.1"
  spec.add_runtime_dependency "jekyll-sitemap", "~> 1.3"
  spec.add_runtime_dependency "jekyll-gist", "~> 1.5"
  spec.add_runtime_dependency "jekyll-feed", "~> 0.12"
  spec.add_runtime_dependency "jekyll-data", "~> 1.1"
  spec.add_runtime_dependency "jemoji", "~> 0.11"

  spec.add_development_dependency "bundler", "~> 2.0"
  spec.add_development_dependency "rake", "~> 13.0"
  spec.add_development_dependency "html-proofer", "~> 3.15"
end