# -*- encoding: utf-8 -*-
# stub: google-cloud-logging 2.2.0 ruby lib

Gem::Specification.new do |s|
  s.name = "google-cloud-logging".freeze
  s.version = "2.2.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Mike Moore".freeze, "Chris Smith".freeze]
  s.date = "2021-03-10"
  s.description = "google-cloud-logging is the official library for Stackdriver Logging.".freeze
  s.email = ["mike@blowmage.com".freeze, "quartzmo@gmail.com".freeze]
  s.homepage = "https://github.com/googleapis/google-cloud-ruby/tree/master/google-cloud-logging".freeze
  s.licenses = ["Apache-2.0".freeze]
  s.required_ruby_version = Gem::Requirement.new(">= 2.5".freeze)
  s.rubygems_version = "3.3.17".freeze
  s.summary = "API Client library for Stackdriver Logging".freeze

  s.installed_by_version = "3.3.17" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4
  end

  if s.respond_to? :add_runtime_dependency then
    s.add_runtime_dependency(%q<google-cloud-core>.freeze, ["~> 1.5"])
    s.add_runtime_dependency(%q<google-cloud-logging-v2>.freeze, ["~> 0.0"])
    s.add_runtime_dependency(%q<stackdriver-core>.freeze, ["~> 1.3"])
    s.add_runtime_dependency(%q<concurrent-ruby>.freeze, ["~> 1.1"])
    s.add_development_dependency(%q<google-style>.freeze, ["~> 1.25.1"])
    s.add_development_dependency(%q<minitest>.freeze, ["~> 5.14"])
    s.add_development_dependency(%q<minitest-autotest>.freeze, ["~> 1.0"])
    s.add_development_dependency(%q<minitest-focus>.freeze, ["~> 1.1"])
    s.add_development_dependency(%q<minitest-rg>.freeze, ["~> 5.2"])
    s.add_development_dependency(%q<autotest-suffix>.freeze, ["~> 1.1"])
    s.add_development_dependency(%q<redcarpet>.freeze, ["~> 3.0"])
    s.add_development_dependency(%q<simplecov>.freeze, ["~> 0.9"])
    s.add_development_dependency(%q<yard>.freeze, ["~> 0.9"])
    s.add_development_dependency(%q<yard-doctest>.freeze, ["~> 0.1.13"])
    s.add_development_dependency(%q<railties>.freeze, ["~> 5.0"])
    s.add_development_dependency(%q<rack>.freeze, [">= 0.1"])
  else
    s.add_dependency(%q<google-cloud-core>.freeze, ["~> 1.5"])
    s.add_dependency(%q<google-cloud-logging-v2>.freeze, ["~> 0.0"])
    s.add_dependency(%q<stackdriver-core>.freeze, ["~> 1.3"])
    s.add_dependency(%q<concurrent-ruby>.freeze, ["~> 1.1"])
    s.add_dependency(%q<google-style>.freeze, ["~> 1.25.1"])
    s.add_dependency(%q<minitest>.freeze, ["~> 5.14"])
    s.add_dependency(%q<minitest-autotest>.freeze, ["~> 1.0"])
    s.add_dependency(%q<minitest-focus>.freeze, ["~> 1.1"])
    s.add_dependency(%q<minitest-rg>.freeze, ["~> 5.2"])
    s.add_dependency(%q<autotest-suffix>.freeze, ["~> 1.1"])
    s.add_dependency(%q<redcarpet>.freeze, ["~> 3.0"])
    s.add_dependency(%q<simplecov>.freeze, ["~> 0.9"])
    s.add_dependency(%q<yard>.freeze, ["~> 0.9"])
    s.add_dependency(%q<yard-doctest>.freeze, ["~> 0.1.13"])
    s.add_dependency(%q<railties>.freeze, ["~> 5.0"])
    s.add_dependency(%q<rack>.freeze, [">= 0.1"])
  end
end
