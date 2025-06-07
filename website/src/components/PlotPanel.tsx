import React, { useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Download, Activity, Zap } from 'lucide-react';
import { SimulationResult } from '../types';
import { useTheme } from '../contexts/ThemeContext';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface PlotPanelProps {
  simulationResult: SimulationResult | null;
  isSimulating: boolean;
}

export const PlotPanel: React.FC<PlotPanelProps> = ({ simulationResult, isSimulating }) => {
  const { isDark } = useTheme();
  const chartRef = useRef<ChartJS<'line', number[], string>>(null);

  const exportData = () => {
    if (!simulationResult) return;
    
    const data = simulationResult.time.map((t, i) => ({
      time: t,
      voltage: simulationResult.voltage[i],
      current: simulationResult.current?.[i] || 0
    }));
    
    const csv = [
      'Time,Voltage,Current',
      ...data.map(row => `${row.time},${row.voltage},${row.current}`)
    ].join('\n');
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'action_potential_data.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  const chartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: isSimulating ? 0 : 750,
      easing: 'easeInOutCubic'
    },
    interaction: {
      intersect: false,
      mode: 'index'
    },
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: isDark ? '#e5e7eb' : '#374151',
          usePointStyle: true,
          padding: 20
        }
      },
      tooltip: {
        backgroundColor: isDark ? '#1f2937' : '#ffffff',
        titleColor: isDark ? '#e5e7eb' : '#111827',
        bodyColor: isDark ? '#e5e7eb' : '#374151',
        borderColor: isDark ? '#4b5563' : '#d1d5db',
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: true,
        callbacks: {
          label: function(context) {
            const label = context.dataset.label || '';
            const value = context.parsed.y;
            const unit = label.includes('Voltage') ? 'mV' : 
                        label.includes('Current') ? 'μA/cm²' : '';
            return `${label}: ${value.toFixed(2)} ${unit}`;
          }
        }
      }
    },
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        title: {
          display: true,
          text: 'Time (ms)',
          color: isDark ? '#9ca3af' : '#6b7280',
          font: {
            size: 12,
            weight: 'bold'
          }
        },
        grid: {
          color: isDark ? '#374151' : '#e5e7eb',
          lineWidth: 1
        },
        ticks: {
          color: isDark ? '#9ca3af' : '#6b7280'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Membrane Potential (mV)',
          color: isDark ? '#9ca3af' : '#6b7280',
          font: {
            size: 12,
            weight: 'bold'
          }
        },
        grid: {
          color: isDark ? '#374151' : '#e5e7eb',
          lineWidth: 1
        },
        ticks: {
          color: isDark ? '#9ca3af' : '#6b7280'
        }
      }
    }
  };

  const chartData = simulationResult ? {
    labels: simulationResult.time,
    datasets: [
      {
        label: 'Membrane Voltage',
        data: simulationResult.voltage,
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        borderWidth: 2,
        fill: true,
        tension: 0.1,
        pointRadius: 0,
        pointHoverRadius: 4
      },
      ...(simulationResult.current ? [{
        label: 'Stimulus Current',
        data: simulationResult.current,
        borderColor: '#f59e0b',
        backgroundColor: 'rgba(245, 158, 11, 0.1)',
        borderWidth: 2,
        fill: false,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 4,
        yAxisID: 'y1'
      }] : [])
    ]
  } : { labels: [], datasets: [] };

  // Add second y-axis for current if present
  if (simulationResult?.current && chartOptions.scales) {
    chartOptions.scales.y1 = {
      type: 'linear',
      display: true,
      position: 'right',
      title: {
        display: true,
        text: 'Current (μA/cm²)',
        color: isDark ? '#9ca3af' : '#6b7280',
        font: {
          size: 12,
          weight: 'bold'
        }
      },
      grid: {
        drawOnChartArea: false
      },
      ticks: {
        color: isDark ? '#9ca3af' : '#6b7280'
      }
    };
  }

  return (
    <div className="h-full flex flex-col bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="flex-shrink-0 p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Activity className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Action Potential Visualization
            </h2>
            {isSimulating && (
              <div className="flex items-center space-x-1 text-blue-600 dark:text-blue-400">
                <Zap className="w-4 h-4 animate-pulse" />
                <span className="text-sm font-medium">Simulating...</span>
              </div>
            )}
          </div>
          
          {simulationResult && (
            <button
              onClick={exportData}
              className="flex items-center space-x-1 px-3 py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors duration-200"
            >
              <Download className="w-4 h-4" />
              <span>Export CSV</span>
            </button>
          )}
        </div>
      </div>

      {/* Chart Area */}
      <div className="flex-1 p-4">
        <div className="h-full graph-container rounded-lg p-4">
          {simulationResult ? (
            <div className="h-full animate-fade-in">
              <Line ref={chartRef} data={chartData} options={chartOptions} />
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500 dark:text-gray-400">
              <div className="text-center">
                <Activity className="w-16 h-16 mx-auto mb-4 opacity-30" />
                <p className="text-lg font-medium mb-2">Ready for Simulation</p>
                <p className="text-sm">
                  Adjust parameters and the simulation will run automatically
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};