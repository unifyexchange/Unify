# frozen_string_literal: true

# Copyright 2020 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     https://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# Auto-generated by gapic-generator-ruby. DO NOT EDIT!

require "google/cloud/errors"
require "google/logging/v2/logging_metrics_pb"

module Google
  module Cloud
    module Logging
      module V2
        module MetricsService
          ##
          # Client for the MetricsService service.
          #
          # Service for configuring logs-based metrics.
          #
          class Client
            include Paths

            # @private
            attr_reader :metrics_service_stub

            ##
            # Configure the MetricsService Client class.
            #
            # See {::Google::Cloud::Logging::V2::MetricsService::Client::Configuration}
            # for a description of the configuration fields.
            #
            # ## Example
            #
            # To modify the configuration for all MetricsService clients:
            #
            #     ::Google::Cloud::Logging::V2::MetricsService::Client.configure do |config|
            #       config.timeout = 10.0
            #     end
            #
            # @yield [config] Configure the Client client.
            # @yieldparam config [Client::Configuration]
            #
            # @return [Client::Configuration]
            #
            def self.configure
              @configure ||= begin
                namespace = ["Google", "Cloud", "Logging", "V2"]
                parent_config = while namespace.any?
                                  parent_name = namespace.join "::"
                                  parent_const = const_get parent_name
                                  break parent_const.configure if parent_const.respond_to? :configure
                                  namespace.pop
                                end
                default_config = Client::Configuration.new parent_config

                default_config.rpcs.list_log_metrics.timeout = 60.0
                default_config.rpcs.list_log_metrics.retry_policy = {
                  initial_delay: 0.1,
              max_delay: 60.0,
              multiplier: 1.3,
              retry_codes: [4, 13, 14]
                }

                default_config.rpcs.get_log_metric.timeout = 60.0
                default_config.rpcs.get_log_metric.retry_policy = {
                  initial_delay: 0.1,
              max_delay: 60.0,
              multiplier: 1.3,
              retry_codes: [4, 13, 14]
                }

                default_config.rpcs.create_log_metric.timeout = 60.0

                default_config.rpcs.update_log_metric.timeout = 60.0
                default_config.rpcs.update_log_metric.retry_policy = {
                  initial_delay: 0.1,
              max_delay: 60.0,
              multiplier: 1.3,
              retry_codes: [4, 13, 14]
                }

                default_config.rpcs.delete_log_metric.timeout = 60.0
                default_config.rpcs.delete_log_metric.retry_policy = {
                  initial_delay: 0.1,
              max_delay: 60.0,
              multiplier: 1.3,
              retry_codes: [4, 13, 14]
                }

                default_config
              end
              yield @configure if block_given?
              @configure
            end

            ##
            # Configure the MetricsService Client instance.
            #
            # The configuration is set to the derived mode, meaning that values can be changed,
            # but structural changes (adding new fields, etc.) are not allowed. Structural changes
            # should be made on {Client.configure}.
            #
            # See {::Google::Cloud::Logging::V2::MetricsService::Client::Configuration}
            # for a description of the configuration fields.
            #
            # @yield [config] Configure the Client client.
            # @yieldparam config [Client::Configuration]
            #
            # @return [Client::Configuration]
            #
            def configure
              yield @config if block_given?
              @config
            end

            ##
            # Create a new MetricsService client object.
            #
            # ## Examples
            #
            # To create a new MetricsService client with the default
            # configuration:
            #
            #     client = ::Google::Cloud::Logging::V2::MetricsService::Client.new
            #
            # To create a new MetricsService client with a custom
            # configuration:
            #
            #     client = ::Google::Cloud::Logging::V2::MetricsService::Client.new do |config|
            #       config.timeout = 10.0
            #     end
            #
            # @yield [config] Configure the MetricsService client.
            # @yieldparam config [Client::Configuration]
            #
            def initialize
              # These require statements are intentionally placed here to initialize
              # the gRPC module only when it's required.
              # See https://github.com/googleapis/toolkit/issues/446
              require "gapic/grpc"
              require "google/logging/v2/logging_metrics_services_pb"

              # Create the configuration object
              @config = Configuration.new Client.configure

              # Yield the configuration if needed
              yield @config if block_given?

              # Create credentials
              credentials = @config.credentials
              # Use self-signed JWT if the scope and endpoint are unchanged from default,
              # but only if the default endpoint does not have a region prefix.
              enable_self_signed_jwt = @config.scope == Client.configure.scope &&
                                       @config.endpoint == Client.configure.endpoint &&
                                       !@config.endpoint.split(".").first.include?("-")
              credentials ||= Credentials.default scope: @config.scope,
                                                  enable_self_signed_jwt: enable_self_signed_jwt
              if credentials.is_a?(String) || credentials.is_a?(Hash)
                credentials = Credentials.new credentials, scope: @config.scope
              end
              @quota_project_id = @config.quota_project
              @quota_project_id ||= credentials.quota_project_id if credentials.respond_to? :quota_project_id

              @metrics_service_stub = ::Gapic::ServiceStub.new(
                ::Google::Cloud::Logging::V2::MetricsServiceV2::Stub,
                credentials:  credentials,
                endpoint:     @config.endpoint,
                channel_args: @config.channel_args,
                interceptors: @config.interceptors
              )
            end

            # Service calls

            ##
            # Lists logs-based metrics.
            #
            # @overload list_log_metrics(request, options = nil)
            #   Pass arguments to `list_log_metrics` via a request object, either of type
            #   {::Google::Cloud::Logging::V2::ListLogMetricsRequest} or an equivalent Hash.
            #
            #   @param request [::Google::Cloud::Logging::V2::ListLogMetricsRequest, ::Hash]
            #     A request object representing the call parameters. Required. To specify no
            #     parameters, or to keep all the default parameter values, pass an empty Hash.
            #   @param options [::Gapic::CallOptions, ::Hash]
            #     Overrides the default settings for this call, e.g, timeout, retries, etc. Optional.
            #
            # @overload list_log_metrics(parent: nil, page_token: nil, page_size: nil)
            #   Pass arguments to `list_log_metrics` via keyword arguments. Note that at
            #   least one keyword argument is required. To specify no parameters, or to keep all
            #   the default parameter values, pass an empty Hash as a request object (see above).
            #
            #   @param parent [::String]
            #     Required. The name of the project containing the metrics:
            #
            #         "projects/[PROJECT_ID]"
            #   @param page_token [::String]
            #     Optional. If present, then retrieve the next batch of results from the
            #     preceding call to this method. `pageToken` must be the value of
            #     `nextPageToken` from the previous response. The values of other method
            #     parameters should be identical to those in the previous call.
            #   @param page_size [::Integer]
            #     Optional. The maximum number of results to return from this request.
            #     Non-positive values are ignored. The presence of `nextPageToken` in the
            #     response indicates that more results might be available.
            #
            # @yield [response, operation] Access the result along with the RPC operation
            # @yieldparam response [::Gapic::PagedEnumerable<::Google::Cloud::Logging::V2::LogMetric>]
            # @yieldparam operation [::GRPC::ActiveCall::Operation]
            #
            # @return [::Gapic::PagedEnumerable<::Google::Cloud::Logging::V2::LogMetric>]
            #
            # @raise [::Google::Cloud::Error] if the RPC is aborted.
            #
            def list_log_metrics request, options = nil
              raise ::ArgumentError, "request must be provided" if request.nil?

              request = ::Gapic::Protobuf.coerce request, to: ::Google::Cloud::Logging::V2::ListLogMetricsRequest

              # Converts hash and nil to an options object
              options = ::Gapic::CallOptions.new(**options.to_h) if options.respond_to? :to_h

              # Customize the options with defaults
              metadata = @config.rpcs.list_log_metrics.metadata.to_h

              # Set x-goog-api-client and x-goog-user-project headers
              metadata[:"x-goog-api-client"] ||= ::Gapic::Headers.x_goog_api_client \
                lib_name: @config.lib_name, lib_version: @config.lib_version,
                gapic_version: ::Google::Cloud::Logging::V2::VERSION
              metadata[:"x-goog-user-project"] = @quota_project_id if @quota_project_id

              header_params = {
                "parent" => request.parent
              }
              request_params_header = header_params.map { |k, v| "#{k}=#{v}" }.join("&")
              metadata[:"x-goog-request-params"] ||= request_params_header

              options.apply_defaults timeout:      @config.rpcs.list_log_metrics.timeout,
                                     metadata:     metadata,
                                     retry_policy: @config.rpcs.list_log_metrics.retry_policy
              options.apply_defaults metadata:     @config.metadata,
                                     retry_policy: @config.retry_policy

              @metrics_service_stub.call_rpc :list_log_metrics, request, options: options do |response, operation|
                response = ::Gapic::PagedEnumerable.new @metrics_service_stub, :list_log_metrics, request, response, operation, options
                yield response, operation if block_given?
                return response
              end
            rescue ::GRPC::BadStatus => e
              raise ::Google::Cloud::Error.from_error(e)
            end

            ##
            # Gets a logs-based metric.
            #
            # @overload get_log_metric(request, options = nil)
            #   Pass arguments to `get_log_metric` via a request object, either of type
            #   {::Google::Cloud::Logging::V2::GetLogMetricRequest} or an equivalent Hash.
            #
            #   @param request [::Google::Cloud::Logging::V2::GetLogMetricRequest, ::Hash]
            #     A request object representing the call parameters. Required. To specify no
            #     parameters, or to keep all the default parameter values, pass an empty Hash.
            #   @param options [::Gapic::CallOptions, ::Hash]
            #     Overrides the default settings for this call, e.g, timeout, retries, etc. Optional.
            #
            # @overload get_log_metric(metric_name: nil)
            #   Pass arguments to `get_log_metric` via keyword arguments. Note that at
            #   least one keyword argument is required. To specify no parameters, or to keep all
            #   the default parameter values, pass an empty Hash as a request object (see above).
            #
            #   @param metric_name [::String]
            #     Required. The resource name of the desired metric:
            #
            #         "projects/[PROJECT_ID]/metrics/[METRIC_ID]"
            #
            # @yield [response, operation] Access the result along with the RPC operation
            # @yieldparam response [::Google::Cloud::Logging::V2::LogMetric]
            # @yieldparam operation [::GRPC::ActiveCall::Operation]
            #
            # @return [::Google::Cloud::Logging::V2::LogMetric]
            #
            # @raise [::Google::Cloud::Error] if the RPC is aborted.
            #
            def get_log_metric request, options = nil
              raise ::ArgumentError, "request must be provided" if request.nil?

              request = ::Gapic::Protobuf.coerce request, to: ::Google::Cloud::Logging::V2::GetLogMetricRequest

              # Converts hash and nil to an options object
              options = ::Gapic::CallOptions.new(**options.to_h) if options.respond_to? :to_h

              # Customize the options with defaults
              metadata = @config.rpcs.get_log_metric.metadata.to_h

              # Set x-goog-api-client and x-goog-user-project headers
              metadata[:"x-goog-api-client"] ||= ::Gapic::Headers.x_goog_api_client \
                lib_name: @config.lib_name, lib_version: @config.lib_version,
                gapic_version: ::Google::Cloud::Logging::V2::VERSION
              metadata[:"x-goog-user-project"] = @quota_project_id if @quota_project_id

              header_params = {
                "metric_name" => request.metric_name
              }
              request_params_header = header_params.map { |k, v| "#{k}=#{v}" }.join("&")
              metadata[:"x-goog-request-params"] ||= request_params_header

              options.apply_defaults timeout:      @config.rpcs.get_log_metric.timeout,
                                     metadata:     metadata,
                                     retry_policy: @config.rpcs.get_log_metric.retry_policy
              options.apply_defaults metadata:     @config.metadata,
                                     retry_policy: @config.retry_policy

              @metrics_service_stub.call_rpc :get_log_metric, request, options: options do |response, operation|
                yield response, operation if block_given?
                return response
              end
            rescue ::GRPC::BadStatus => e
              raise ::Google::Cloud::Error.from_error(e)
            end

            ##
            # Creates a logs-based metric.
            #
            # @overload create_log_metric(request, options = nil)
            #   Pass arguments to `create_log_metric` via a request object, either of type
            #   {::Google::Cloud::Logging::V2::CreateLogMetricRequest} or an equivalent Hash.
            #
            #   @param request [::Google::Cloud::Logging::V2::CreateLogMetricRequest, ::Hash]
            #     A request object representing the call parameters. Required. To specify no
            #     parameters, or to keep all the default parameter values, pass an empty Hash.
            #   @param options [::Gapic::CallOptions, ::Hash]
            #     Overrides the default settings for this call, e.g, timeout, retries, etc. Optional.
            #
            # @overload create_log_metric(parent: nil, metric: nil)
            #   Pass arguments to `create_log_metric` via keyword arguments. Note that at
            #   least one keyword argument is required. To specify no parameters, or to keep all
            #   the default parameter values, pass an empty Hash as a request object (see above).
            #
            #   @param parent [::String]
            #     Required. The resource name of the project in which to create the metric:
            #
            #         "projects/[PROJECT_ID]"
            #
            #     The new metric must be provided in the request.
            #   @param metric [::Google::Cloud::Logging::V2::LogMetric, ::Hash]
            #     Required. The new logs-based metric, which must not have an identifier that
            #     already exists.
            #
            # @yield [response, operation] Access the result along with the RPC operation
            # @yieldparam response [::Google::Cloud::Logging::V2::LogMetric]
            # @yieldparam operation [::GRPC::ActiveCall::Operation]
            #
            # @return [::Google::Cloud::Logging::V2::LogMetric]
            #
            # @raise [::Google::Cloud::Error] if the RPC is aborted.
            #
            def create_log_metric request, options = nil
              raise ::ArgumentError, "request must be provided" if request.nil?

              request = ::Gapic::Protobuf.coerce request, to: ::Google::Cloud::Logging::V2::CreateLogMetricRequest

              # Converts hash and nil to an options object
              options = ::Gapic::CallOptions.new(**options.to_h) if options.respond_to? :to_h

              # Customize the options with defaults
              metadata = @config.rpcs.create_log_metric.metadata.to_h

              # Set x-goog-api-client and x-goog-user-project headers
              metadata[:"x-goog-api-client"] ||= ::Gapic::Headers.x_goog_api_client \
                lib_name: @config.lib_name, lib_version: @config.lib_version,
                gapic_version: ::Google::Cloud::Logging::V2::VERSION
              metadata[:"x-goog-user-project"] = @quota_project_id if @quota_project_id

              header_params = {
                "parent" => request.parent
              }
              request_params_header = header_params.map { |k, v| "#{k}=#{v}" }.join("&")
              metadata[:"x-goog-request-params"] ||= request_params_header

              options.apply_defaults timeout:      @config.rpcs.create_log_metric.timeout,
                                     metadata:     metadata,
                                     retry_policy: @config.rpcs.create_log_metric.retry_policy
              options.apply_defaults metadata:     @config.metadata,
                                     retry_policy: @config.retry_policy

              @metrics_service_stub.call_rpc :create_log_metric, request, options: options do |response, operation|
                yield response, operation if block_given?
                return response
              end
            rescue ::GRPC::BadStatus => e
              raise ::Google::Cloud::Error.from_error(e)
            end

            ##
            # Creates or updates a logs-based metric.
            #
            # @overload update_log_metric(request, options = nil)
            #   Pass arguments to `update_log_metric` via a request object, either of type
            #   {::Google::Cloud::Logging::V2::UpdateLogMetricRequest} or an equivalent Hash.
            #
            #   @param request [::Google::Cloud::Logging::V2::UpdateLogMetricRequest, ::Hash]
            #     A request object representing the call parameters. Required. To specify no
            #     parameters, or to keep all the default parameter values, pass an empty Hash.
            #   @param options [::Gapic::CallOptions, ::Hash]
            #     Overrides the default settings for this call, e.g, timeout, retries, etc. Optional.
            #
            # @overload update_log_metric(metric_name: nil, metric: nil)
            #   Pass arguments to `update_log_metric` via keyword arguments. Note that at
            #   least one keyword argument is required. To specify no parameters, or to keep all
            #   the default parameter values, pass an empty Hash as a request object (see above).
            #
            #   @param metric_name [::String]
            #     Required. The resource name of the metric to update:
            #
            #         "projects/[PROJECT_ID]/metrics/[METRIC_ID]"
            #
            #     The updated metric must be provided in the request and it's
            #     `name` field must be the same as `[METRIC_ID]` If the metric
            #     does not exist in `[PROJECT_ID]`, then a new metric is created.
            #   @param metric [::Google::Cloud::Logging::V2::LogMetric, ::Hash]
            #     Required. The updated metric.
            #
            # @yield [response, operation] Access the result along with the RPC operation
            # @yieldparam response [::Google::Cloud::Logging::V2::LogMetric]
            # @yieldparam operation [::GRPC::ActiveCall::Operation]
            #
            # @return [::Google::Cloud::Logging::V2::LogMetric]
            #
            # @raise [::Google::Cloud::Error] if the RPC is aborted.
            #
            def update_log_metric request, options = nil
              raise ::ArgumentError, "request must be provided" if request.nil?

              request = ::Gapic::Protobuf.coerce request, to: ::Google::Cloud::Logging::V2::UpdateLogMetricRequest

              # Converts hash and nil to an options object
              options = ::Gapic::CallOptions.new(**options.to_h) if options.respond_to? :to_h

              # Customize the options with defaults
              metadata = @config.rpcs.update_log_metric.metadata.to_h

              # Set x-goog-api-client and x-goog-user-project headers
              metadata[:"x-goog-api-client"] ||= ::Gapic::Headers.x_goog_api_client \
                lib_name: @config.lib_name, lib_version: @config.lib_version,
                gapic_version: ::Google::Cloud::Logging::V2::VERSION
              metadata[:"x-goog-user-project"] = @quota_project_id if @quota_project_id

              header_params = {
                "metric_name" => request.metric_name
              }
              request_params_header = header_params.map { |k, v| "#{k}=#{v}" }.join("&")
              metadata[:"x-goog-request-params"] ||= request_params_header

              options.apply_defaults timeout:      @config.rpcs.update_log_metric.timeout,
                                     metadata:     metadata,
                                     retry_policy: @config.rpcs.update_log_metric.retry_policy
              options.apply_defaults metadata:     @config.metadata,
                                     retry_policy: @config.retry_policy

              @metrics_service_stub.call_rpc :update_log_metric, request, options: options do |response, operation|
                yield response, operation if block_given?
                return response
              end
            rescue ::GRPC::BadStatus => e
              raise ::Google::Cloud::Error.from_error(e)
            end

            ##
            # Deletes a logs-based metric.
            #
            # @overload delete_log_metric(request, options = nil)
            #   Pass arguments to `delete_log_metric` via a request object, either of type
            #   {::Google::Cloud::Logging::V2::DeleteLogMetricRequest} or an equivalent Hash.
            #
            #   @param request [::Google::Cloud::Logging::V2::DeleteLogMetricRequest, ::Hash]
            #     A request object representing the call parameters. Required. To specify no
            #     parameters, or to keep all the default parameter values, pass an empty Hash.
            #   @param options [::Gapic::CallOptions, ::Hash]
            #     Overrides the default settings for this call, e.g, timeout, retries, etc. Optional.
            #
            # @overload delete_log_metric(metric_name: nil)
            #   Pass arguments to `delete_log_metric` via keyword arguments. Note that at
            #   least one keyword argument is required. To specify no parameters, or to keep all
            #   the default parameter values, pass an empty Hash as a request object (see above).
            #
            #   @param metric_name [::String]
            #     Required. The resource name of the metric to delete:
            #
            #         "projects/[PROJECT_ID]/metrics/[METRIC_ID]"
            #
            # @yield [response, operation] Access the result along with the RPC operation
            # @yieldparam response [::Google::Protobuf::Empty]
            # @yieldparam operation [::GRPC::ActiveCall::Operation]
            #
            # @return [::Google::Protobuf::Empty]
            #
            # @raise [::Google::Cloud::Error] if the RPC is aborted.
            #
            def delete_log_metric request, options = nil
              raise ::ArgumentError, "request must be provided" if request.nil?

              request = ::Gapic::Protobuf.coerce request, to: ::Google::Cloud::Logging::V2::DeleteLogMetricRequest

              # Converts hash and nil to an options object
              options = ::Gapic::CallOptions.new(**options.to_h) if options.respond_to? :to_h

              # Customize the options with defaults
              metadata = @config.rpcs.delete_log_metric.metadata.to_h

              # Set x-goog-api-client and x-goog-user-project headers
              metadata[:"x-goog-api-client"] ||= ::Gapic::Headers.x_goog_api_client \
                lib_name: @config.lib_name, lib_version: @config.lib_version,
                gapic_version: ::Google::Cloud::Logging::V2::VERSION
              metadata[:"x-goog-user-project"] = @quota_project_id if @quota_project_id

              header_params = {
                "metric_name" => request.metric_name
              }
              request_params_header = header_params.map { |k, v| "#{k}=#{v}" }.join("&")
              metadata[:"x-goog-request-params"] ||= request_params_header

              options.apply_defaults timeout:      @config.rpcs.delete_log_metric.timeout,
                                     metadata:     metadata,
                                     retry_policy: @config.rpcs.delete_log_metric.retry_policy
              options.apply_defaults metadata:     @config.metadata,
                                     retry_policy: @config.retry_policy

              @metrics_service_stub.call_rpc :delete_log_metric, request, options: options do |response, operation|
                yield response, operation if block_given?
                return response
              end
            rescue ::GRPC::BadStatus => e
              raise ::Google::Cloud::Error.from_error(e)
            end

            ##
            # Configuration class for the MetricsService API.
            #
            # This class represents the configuration for MetricsService,
            # providing control over timeouts, retry behavior, logging, transport
            # parameters, and other low-level controls. Certain parameters can also be
            # applied individually to specific RPCs. See
            # {::Google::Cloud::Logging::V2::MetricsService::Client::Configuration::Rpcs}
            # for a list of RPCs that can be configured independently.
            #
            # Configuration can be applied globally to all clients, or to a single client
            # on construction.
            #
            # # Examples
            #
            # To modify the global config, setting the timeout for list_log_metrics
            # to 20 seconds, and all remaining timeouts to 10 seconds:
            #
            #     ::Google::Cloud::Logging::V2::MetricsService::Client.configure do |config|
            #       config.timeout = 10.0
            #       config.rpcs.list_log_metrics.timeout = 20.0
            #     end
            #
            # To apply the above configuration only to a new client:
            #
            #     client = ::Google::Cloud::Logging::V2::MetricsService::Client.new do |config|
            #       config.timeout = 10.0
            #       config.rpcs.list_log_metrics.timeout = 20.0
            #     end
            #
            # @!attribute [rw] endpoint
            #   The hostname or hostname:port of the service endpoint.
            #   Defaults to `"logging.googleapis.com"`.
            #   @return [::String]
            # @!attribute [rw] credentials
            #   Credentials to send with calls. You may provide any of the following types:
            #    *  (`String`) The path to a service account key file in JSON format
            #    *  (`Hash`) A service account key as a Hash
            #    *  (`Google::Auth::Credentials`) A googleauth credentials object
            #       (see the [googleauth docs](https://googleapis.dev/ruby/googleauth/latest/index.html))
            #    *  (`Signet::OAuth2::Client`) A signet oauth2 client object
            #       (see the [signet docs](https://googleapis.dev/ruby/signet/latest/Signet/OAuth2/Client.html))
            #    *  (`GRPC::Core::Channel`) a gRPC channel with included credentials
            #    *  (`GRPC::Core::ChannelCredentials`) a gRPC credentails object
            #    *  (`nil`) indicating no credentials
            #   @return [::Object]
            # @!attribute [rw] scope
            #   The OAuth scopes
            #   @return [::Array<::String>]
            # @!attribute [rw] lib_name
            #   The library name as recorded in instrumentation and logging
            #   @return [::String]
            # @!attribute [rw] lib_version
            #   The library version as recorded in instrumentation and logging
            #   @return [::String]
            # @!attribute [rw] channel_args
            #   Extra parameters passed to the gRPC channel. Note: this is ignored if a
            #   `GRPC::Core::Channel` object is provided as the credential.
            #   @return [::Hash]
            # @!attribute [rw] interceptors
            #   An array of interceptors that are run before calls are executed.
            #   @return [::Array<::GRPC::ClientInterceptor>]
            # @!attribute [rw] timeout
            #   The call timeout in seconds.
            #   @return [::Numeric]
            # @!attribute [rw] metadata
            #   Additional gRPC headers to be sent with the call.
            #   @return [::Hash{::Symbol=>::String}]
            # @!attribute [rw] retry_policy
            #   The retry policy. The value is a hash with the following keys:
            #    *  `:initial_delay` (*type:* `Numeric`) - The initial delay in seconds.
            #    *  `:max_delay` (*type:* `Numeric`) - The max delay in seconds.
            #    *  `:multiplier` (*type:* `Numeric`) - The incremental backoff multiplier.
            #    *  `:retry_codes` (*type:* `Array<String>`) - The error codes that should
            #       trigger a retry.
            #   @return [::Hash]
            # @!attribute [rw] quota_project
            #   A separate project against which to charge quota.
            #   @return [::String]
            #
            class Configuration
              extend ::Gapic::Config

              config_attr :endpoint,      "logging.googleapis.com", ::String
              config_attr :credentials,   nil do |value|
                allowed = [::String, ::Hash, ::Proc, ::Symbol, ::Google::Auth::Credentials, ::Signet::OAuth2::Client, nil]
                allowed += [::GRPC::Core::Channel, ::GRPC::Core::ChannelCredentials] if defined? ::GRPC
                allowed.any? { |klass| klass === value }
              end
              config_attr :scope,         nil, ::String, ::Array, nil
              config_attr :lib_name,      nil, ::String, nil
              config_attr :lib_version,   nil, ::String, nil
              config_attr(:channel_args,  { "grpc.service_config_disable_resolution" => 1 }, ::Hash, nil)
              config_attr :interceptors,  nil, ::Array, nil
              config_attr :timeout,       nil, ::Numeric, nil
              config_attr :metadata,      nil, ::Hash, nil
              config_attr :retry_policy,  nil, ::Hash, ::Proc, nil
              config_attr :quota_project, nil, ::String, nil

              # @private
              def initialize parent_config = nil
                @parent_config = parent_config unless parent_config.nil?

                yield self if block_given?
              end

              ##
              # Configurations for individual RPCs
              # @return [Rpcs]
              #
              def rpcs
                @rpcs ||= begin
                  parent_rpcs = nil
                  parent_rpcs = @parent_config.rpcs if defined?(@parent_config) && @parent_config.respond_to?(:rpcs)
                  Rpcs.new parent_rpcs
                end
              end

              ##
              # Configuration RPC class for the MetricsService API.
              #
              # Includes fields providing the configuration for each RPC in this service.
              # Each configuration object is of type `Gapic::Config::Method` and includes
              # the following configuration fields:
              #
              #  *  `timeout` (*type:* `Numeric`) - The call timeout in seconds
              #  *  `metadata` (*type:* `Hash{Symbol=>String}`) - Additional gRPC headers
              #  *  `retry_policy (*type:* `Hash`) - The retry policy. The policy fields
              #     include the following keys:
              #      *  `:initial_delay` (*type:* `Numeric`) - The initial delay in seconds.
              #      *  `:max_delay` (*type:* `Numeric`) - The max delay in seconds.
              #      *  `:multiplier` (*type:* `Numeric`) - The incremental backoff multiplier.
              #      *  `:retry_codes` (*type:* `Array<String>`) - The error codes that should
              #         trigger a retry.
              #
              class Rpcs
                ##
                # RPC-specific configuration for `list_log_metrics`
                # @return [::Gapic::Config::Method]
                #
                attr_reader :list_log_metrics
                ##
                # RPC-specific configuration for `get_log_metric`
                # @return [::Gapic::Config::Method]
                #
                attr_reader :get_log_metric
                ##
                # RPC-specific configuration for `create_log_metric`
                # @return [::Gapic::Config::Method]
                #
                attr_reader :create_log_metric
                ##
                # RPC-specific configuration for `update_log_metric`
                # @return [::Gapic::Config::Method]
                #
                attr_reader :update_log_metric
                ##
                # RPC-specific configuration for `delete_log_metric`
                # @return [::Gapic::Config::Method]
                #
                attr_reader :delete_log_metric

                # @private
                def initialize parent_rpcs = nil
                  list_log_metrics_config = parent_rpcs.list_log_metrics if parent_rpcs.respond_to? :list_log_metrics
                  @list_log_metrics = ::Gapic::Config::Method.new list_log_metrics_config
                  get_log_metric_config = parent_rpcs.get_log_metric if parent_rpcs.respond_to? :get_log_metric
                  @get_log_metric = ::Gapic::Config::Method.new get_log_metric_config
                  create_log_metric_config = parent_rpcs.create_log_metric if parent_rpcs.respond_to? :create_log_metric
                  @create_log_metric = ::Gapic::Config::Method.new create_log_metric_config
                  update_log_metric_config = parent_rpcs.update_log_metric if parent_rpcs.respond_to? :update_log_metric
                  @update_log_metric = ::Gapic::Config::Method.new update_log_metric_config
                  delete_log_metric_config = parent_rpcs.delete_log_metric if parent_rpcs.respond_to? :delete_log_metric
                  @delete_log_metric = ::Gapic::Config::Method.new delete_log_metric_config

                  yield self if block_given?
                end
              end
            end
          end
        end
      end
    end
  end
end
