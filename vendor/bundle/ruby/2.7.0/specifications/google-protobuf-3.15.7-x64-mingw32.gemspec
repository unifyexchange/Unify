# -*- encoding: utf-8 -*-
# stub: google-protobuf 3.15.7 x64-mingw32 lib

Gem::Specification.new do |s|
  s.name = "google-protobuf".freeze
  s.version = "3.15.7"
  s.platform = "x64-mingw32".freeze

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.metadata = { "source_code_uri" => "https://github.com/protocolbuffers/protobuf/tree/v3.15.7/ruby" } if s.respond_to? :metadata=
  s.require_paths = ["lib".freeze]
  s.authors = ["Protobuf Authors".freeze]
  s.date = "2021-04-02"
  s.description = "Protocol Buffers are Google's data interchange format.".freeze
  s.email = "protobuf@googlegroups.com".freeze
  s.homepage = "https://developers.google.com/protocol-buffers".freeze
  s.licenses = ["BSD-3-Clause".freeze]
  s.required_ruby_version = Gem::Requirement.new([">= 2.3".freeze, "< 3.1.dev".freeze])
  s.rubygems_version = "3.3.17".freeze
  s.summary = "Protocol Buffers".freeze

  s.installed_by_version = "3.3.17" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4
  end

  if s.respond_to? :add_runtime_dependency then
    s.add_development_dependency(%q<rake-compiler-dock>.freeze, [">= 1.1.0", "< 2.0"])
    s.add_development_dependency(%q<rake-compiler>.freeze, ["~> 1.1.0"])
    s.add_development_dependency(%q<test-unit>.freeze, ["~> 3.0", ">= 3.0.9"])
    s.add_development_dependency(%q<rubygems-tasks>.freeze, ["~> 0.2.4"])
  else
    s.add_dependency(%q<rake-compiler-dock>.freeze, [">= 1.1.0", "< 2.0"])
    s.add_dependency(%q<rake-compiler>.freeze, ["~> 1.1.0"])
    s.add_dependency(%q<test-unit>.freeze, ["~> 3.0", ">= 3.0.9"])
    s.add_dependency(%q<rubygems-tasks>.freeze, ["~> 0.2.4"])
  end
end
