# -*- encoding: utf-8 -*-
# stub: appengine 0.6.0 ruby lib

Gem::Specification.new do |s|
  s.name = "appengine".freeze
  s.version = "0.6.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Daniel Azuma".freeze]
  s.date = "2020-12-02"
  s.description = "The appengine gem is a set of classes, plugins, and tools for integration with Google App Engine. It provides access to the App Engine runtime environment, including logging to the Google Cloud Console and interrogation of hosting properties. It also provides Rake tasks for managing your App Engine application, for example to run production maintenance commands such as database migrations. This gem is NOT required to deploy your Ruby application to App Engine.".freeze
  s.email = ["dazuma@gmail.com".freeze]
  s.homepage = "https://github.com/GoogleCloudPlatform/appengine-ruby".freeze
  s.licenses = ["Apache-2.0".freeze]
  s.required_ruby_version = Gem::Requirement.new(">= 2.4.0".freeze)
  s.rubygems_version = "3.3.17".freeze
  s.summary = "Google App Engine integration tools".freeze

  s.installed_by_version = "3.3.17" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4
  end

  if s.respond_to? :add_runtime_dependency then
    s.add_runtime_dependency(%q<google-cloud-env>.freeze, ["~> 1.4"])
    s.add_runtime_dependency(%q<stackdriver>.freeze, ["~> 0.20", ">= 0.20.1"])
    s.add_development_dependency(%q<bundler>.freeze, ["~> 2.0"])
    s.add_development_dependency(%q<google-style>.freeze, ["~> 1.24.0"])
    s.add_development_dependency(%q<minitest>.freeze, ["~> 5.11"])
    s.add_development_dependency(%q<minitest-focus>.freeze, ["~> 1.1"])
    s.add_development_dependency(%q<minitest-rg>.freeze, ["~> 5.2"])
    s.add_development_dependency(%q<rake>.freeze, ["~> 12.0"])
    s.add_development_dependency(%q<rdoc>.freeze, ["~> 6.0"])
    s.add_development_dependency(%q<redcarpet>.freeze, ["~> 3.4"])
    s.add_development_dependency(%q<toys>.freeze, ["~> 0.11"])
    s.add_development_dependency(%q<yard>.freeze, ["~> 0.9"])
  else
    s.add_dependency(%q<google-cloud-env>.freeze, ["~> 1.4"])
    s.add_dependency(%q<stackdriver>.freeze, ["~> 0.20", ">= 0.20.1"])
    s.add_dependency(%q<bundler>.freeze, ["~> 2.0"])
    s.add_dependency(%q<google-style>.freeze, ["~> 1.24.0"])
    s.add_dependency(%q<minitest>.freeze, ["~> 5.11"])
    s.add_dependency(%q<minitest-focus>.freeze, ["~> 1.1"])
    s.add_dependency(%q<minitest-rg>.freeze, ["~> 5.2"])
    s.add_dependency(%q<rake>.freeze, ["~> 12.0"])
    s.add_dependency(%q<rdoc>.freeze, ["~> 6.0"])
    s.add_dependency(%q<redcarpet>.freeze, ["~> 3.4"])
    s.add_dependency(%q<toys>.freeze, ["~> 0.11"])
    s.add_dependency(%q<yard>.freeze, ["~> 0.9"])
  end
end
