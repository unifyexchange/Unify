# -*- encoding: utf-8 -*-
# stub: gapic-common 0.4.0 ruby lib

Gem::Specification.new do |s|
  s.name = "gapic-common".freeze
  s.version = "0.4.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Google API Authors".freeze]
  s.date = "2021-02-26"
  s.email = ["googleapis-packages@google.com".freeze]
  s.homepage = "https://github.com/googleapis/gapic-generator-ruby".freeze
  s.licenses = ["Apache-2.0".freeze]
  s.required_ruby_version = Gem::Requirement.new(">= 2.5".freeze)
  s.rubygems_version = "3.3.17".freeze
  s.summary = "Common code for GAPIC-generated API clients".freeze

  s.installed_by_version = "3.3.17" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4
  end

  if s.respond_to? :add_runtime_dependency then
    s.add_runtime_dependency(%q<faraday>.freeze, ["~> 1.3"])
    s.add_runtime_dependency(%q<googleapis-common-protos>.freeze, [">= 1.3.11", "< 2.0"])
    s.add_runtime_dependency(%q<googleapis-common-protos-types>.freeze, [">= 1.0.6", "< 2.0"])
    s.add_runtime_dependency(%q<googleauth>.freeze, ["~> 0.15", ">= 0.15.1"])
    s.add_runtime_dependency(%q<google-protobuf>.freeze, ["~> 3.15", ">= 3.15.2"])
    s.add_runtime_dependency(%q<grpc>.freeze, ["~> 1.36"])
    s.add_development_dependency(%q<google-cloud-core>.freeze, ["~> 1.5"])
    s.add_development_dependency(%q<google-style>.freeze, ["~> 1.25.1"])
    s.add_development_dependency(%q<minitest>.freeze, ["~> 5.10"])
    s.add_development_dependency(%q<minitest-autotest>.freeze, ["~> 1.0"])
    s.add_development_dependency(%q<minitest-focus>.freeze, ["~> 1.1"])
    s.add_development_dependency(%q<minitest-rg>.freeze, ["~> 5.2"])
    s.add_development_dependency(%q<rake>.freeze, [">= 12.0"])
    s.add_development_dependency(%q<redcarpet>.freeze, ["~> 3.0"])
    s.add_development_dependency(%q<yard>.freeze, ["~> 0.9"])
  else
    s.add_dependency(%q<faraday>.freeze, ["~> 1.3"])
    s.add_dependency(%q<googleapis-common-protos>.freeze, [">= 1.3.11", "< 2.0"])
    s.add_dependency(%q<googleapis-common-protos-types>.freeze, [">= 1.0.6", "< 2.0"])
    s.add_dependency(%q<googleauth>.freeze, ["~> 0.15", ">= 0.15.1"])
    s.add_dependency(%q<google-protobuf>.freeze, ["~> 3.15", ">= 3.15.2"])
    s.add_dependency(%q<grpc>.freeze, ["~> 1.36"])
    s.add_dependency(%q<google-cloud-core>.freeze, ["~> 1.5"])
    s.add_dependency(%q<google-style>.freeze, ["~> 1.25.1"])
    s.add_dependency(%q<minitest>.freeze, ["~> 5.10"])
    s.add_dependency(%q<minitest-autotest>.freeze, ["~> 1.0"])
    s.add_dependency(%q<minitest-focus>.freeze, ["~> 1.1"])
    s.add_dependency(%q<minitest-rg>.freeze, ["~> 5.2"])
    s.add_dependency(%q<rake>.freeze, [">= 12.0"])
    s.add_dependency(%q<redcarpet>.freeze, ["~> 3.0"])
    s.add_dependency(%q<yard>.freeze, ["~> 0.9"])
  end
end
