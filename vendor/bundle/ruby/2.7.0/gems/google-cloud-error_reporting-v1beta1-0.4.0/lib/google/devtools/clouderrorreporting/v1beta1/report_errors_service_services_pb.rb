# Generated by the protocol buffer compiler.  DO NOT EDIT!
# Source: google/devtools/clouderrorreporting/v1beta1/report_errors_service.proto for package 'Google.Cloud.ErrorReporting.V1beta1'
# Original file comments:
# Copyright 2021 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#

require 'grpc'
require 'google/devtools/clouderrorreporting/v1beta1/report_errors_service_pb'

module Google
  module Cloud
    module ErrorReporting
      module V1beta1
        module ReportErrorsService
          # An API for reporting error events.
          class Service

            include GRPC::GenericService

            self.marshal_class_method = :encode
            self.unmarshal_class_method = :decode
            self.service_name = 'google.devtools.clouderrorreporting.v1beta1.ReportErrorsService'

            # Report an individual error event and record the event to a log.
            #
            # This endpoint accepts **either** an OAuth token,
            # **or** an [API key](https://support.google.com/cloud/answer/6158862)
            # for authentication. To use an API key, append it to the URL as the value of
            # a `key` parameter. For example:
            #
            # `POST
            # https://clouderrorreporting.googleapis.com/v1beta1/{projectName}/events:report?key=123ABC456`
            #
            # **Note:** [Error Reporting](/error-reporting) is a global service built
            # on Cloud Logging and doesn't analyze logs stored
            # in regional log buckets or logs routed to other Google Cloud projects.
            #
            # For more information, see
            # [Using Error Reporting with regionalized
            # logs](/error-reporting/docs/regionalization).
            rpc :ReportErrorEvent, ::Google::Cloud::ErrorReporting::V1beta1::ReportErrorEventRequest, ::Google::Cloud::ErrorReporting::V1beta1::ReportErrorEventResponse
          end

          Stub = Service.rpc_stub_class
        end
      end
    end
  end
end
